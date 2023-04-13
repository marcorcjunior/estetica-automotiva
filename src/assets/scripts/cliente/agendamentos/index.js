
const listaExemplo = [
    {
        data: '30/01',
        servico: {
            nome: 'Serviço 1',
            descricao: 'Descrição do serviço 1',
            valor: 49.90
        },
        carro: {
            nome: 'Carro exemplo',
            modelo: 'Modelo',
            ano: 2000,
            cor: 'cor'
        }
    },
    {
        data: '30/02',
        servico: {
            nome: 'Serviço 2',
            descricao: 'Descrição do serviço 2',
            valor: 129.90
        },
        carro: {
            nome: 'Carro exemplo',
            modelo: 'Modelo',
            ano: 2000,
            cor: 'cor'
        }
    },
    {
        data: '30/03',
        servico: {
            nome: 'Serviço 1',
            descricao: 'Descrição do serviço 1',
            valor: 49.90
        },
        carro: {
            nome: 'Carro exemplo',
            modelo: 'Modelo',
            ano: 2000,
            cor: 'cor'
        }
    },
    {
        data: '30/04',
        servico: {
            nome: 'Serviço 2',
            descricao: 'Descrição do serviço 2',
            valor: 129.90
        },
        carro: {
            nome: 'Carro exemplo',
            modelo: 'Modelo',
            ano: 2000,
            cor: 'cor'
        }
    },
    {
        data: '30/05',
        servico: {
            nome: 'Serviço 1',
            descricao: 'Descrição do serviço 1',
            valor: 49.90
        },
        carro: {
            nome: 'Carro exemplo',
            modelo: 'Modelo',
            ano: 2000,
            cor: 'cor'
        }
    },
    {
        data: '30/06',
        servico: {
            nome: 'Serviço 2',
            descricao: 'Descrição do serviço 2',
            valor: 129.90
        },
        carro: {
            nome: 'Carro exemplo',
            modelo: 'Modelo',
            ano: 2000,
            cor: 'cor'
        }
    },
];

let listaAgendaServicos = null;

constructor = () => {
    listaAgendaServicos = document.getElementById('listaAgendaServicos');

    for (let index = 0; index < listaExemplo.length; index++) {
        const agendamento = listaExemplo[index];
        listaAgendaServicos.insertAdjacentHTML(
            'beforeend',
            itemLista(index, agendamento)
        );

    }
}

itemLista = ( posicao, agendamento) => {
    const sendParameters = new URLSearchParams(agendamento);

    return (`
        <li class="container row ${posicao % 2 ? 'row--white' : 'row--whitesmoke'}" >
            <a onclick="location.href = './form.html?${sendParameters.toString()}'">
                <div class="container-row align-center">

                    <label style="font-size: large;">
                        ${agendamento.servico.nome}
                    </label>
        
                    <div class="container"></div>
        
                    <div style="padding-left: 32px;">
                        <label class="font-price">
                            ${formateCurrencyPTBr(agendamento.servico.valor)}
                        </label>
                    </div>
        
                    <button class="button-arrow-list">
                        <span alt="sair" class="material-symbols-outlined" style="font-size: 36px;">
                            navigate_next
                        </span>
                    </button>
                </div>
        
                <label>
                ${agendamento.data} - ${agendamento.servico.descricao}
                </label>
        	    <br />
                <label>
                ${agendamento.carro.nome} - ${agendamento.carro.modelo} - ${agendamento.carro.ano} - ${agendamento.carro.cor}
                </label>
            </a>
        </li>
    `);
}

setTimeout(() => {
    constructor();
}, 100);