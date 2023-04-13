
const listaExemplo = [
    {
        cliente: {
            nome: 'Nome do cliente 1',
            carro: 'Descriçao grande do carro 2'
        },
        data: '10/01/2020',
        servicos: [
            {
                nome: 'Serviço 2',
                descricao: 'Descrição do serviço 2',
                valor: 119.90
            }
        ]
    },
    {
        cliente: {
            nome: 'Nome do cliente grande para testes 2',
            carro: 'Descriçao do carro 3'
        },
        data: '30/01',
        servicos: [
            {
                nome: 'Serviço 1',
                descricao: 'Descrição do serviço 2 para testar se a quebra de linha esta funcionando como deveria e travando quando bate mais de 3 linhas de conteudo',
                valor: 119.90
            },
            {
                nome: 'Serviço 3',
                descricao: 'Descrição do serviço 3',
                valor: 319.90
            },
            {
                nome: 'Serviço 4',
                descricao: 'Descrição do serviço 4',
                valor: 20.00
            }
        ]
    },
    {
        cliente: {
            nome: 'Nome do cliente maior ainda que o grande para testes 4',
            carro: 'Descriçao do carro 2'
        },
        data: '08/02',
        servicos: [
            {
                nome: 'Serviço 2',
                descricao: 'Descrição do serviço 2',
                valor: 119.90
            },
            {
                nome: 'Serviço 4',
                descricao: 'Descrição do serviço 4',
                valor: 20.00
            }
        ]
    },
    {
        cliente: {
            nome: 'Nome do cliente 8',
            carro: 'Descriçao do carro 3'
        },
        data: '13/02',
        servicos: [
            {
                nome: 'Serviço 1',
                descricao: 'Descrição do serviço 2',
                valor: 49.90
            },
            {
                nome: 'Serviço 3',
                descricao: 'Descrição do serviço 3',
                valor: 319.90
            },
            {
                nome: 'Serviço 4',
                descricao: 'Descrição do serviço 4',
                valor: 20.00
            }
        ]
    },
    {
        cliente: {
            nome: 'Nome do cliente 12',
            carro: 'Descriçao do carro 2'
        },
        data: '10/03',
        servicos: [
            {
                nome: 'Serviço 2',
                descricao: 'Descrição do serviço 2',
                valor: 49.90
            }
        ]
    },
    {
        cliente: {
            nome: 'Nome do cliente 26',
            carro: 'Descriçao do carro 3'
        },
        data: '30/03',
        servicos: [
            {
                nome: 'Serviço 1',
                descricao: 'Descrição do serviço 2',
                valor: 119.90
            },
            {
                nome: 'Serviço 4',
                descricao: 'Descrição do serviço 4',
                valor: 49.90
            }
        ]
    },

];

let listaAgendamentos = null;

constructor = () => {
    listaAgendamentos = document.getElementById('listaAgendamentos');

    for (let index = 0; index < listaExemplo.length; index++) {
        const agendamento = listaExemplo[index];
        listaAgendamentos.insertAdjacentHTML(
            'beforeend',
            itemLista(index, agendamento)
        );

    }
}

itemLista = (posicao, agendamento) => {

    return (`
        <li class="container row ${posicao % 2 ? 'row--white' : 'row--whitesmoke'}">
            <a onclick="location.href = '../agendamentos/form.html'">
                <div class="container-row" style="display: flex; align-items: center; justify-content: center;">

                    <div class="container">
                        <label class="title-row" style="font-size: large;">
                            ${agendamento.cliente.nome}
                        </label>
                    </div>

                    <div style="margin-left: 16px;">
                        <label class="font-price">
                            ${formateCurrencyPTBr(
                                agendamento.servicos.reduce((accumulator, currentValue) => accumulator + currentValue.valor, 0)
                            )}
                        </label>
                    </div>

                    <button class="button-arrow-list">
                        <span alt="sair" class="material-symbols-outlined" style="font-size: 36px;">
                            navigate_next
                        </span>
                    </button>
                </div>

                <br />

                <label class="description-row">
                    ${agendamento.data} - ${agendamento.cliente.carro}
                </label>

                ${agendamento.servicos.length ?
            `   <hr style="margin-top: 16px; margin-bottom: 16px;" />

                <ul style="list-style-type: disc; margin-left: 16px;">
                    ${agendamento.servicos.map(
                        ({ nome, descricao, valor }) =>
                            `<li>
                                ${nome} - ${formateCurrencyPTBr(valor)}
                            </li>
                            <br />
                            `
                        ).join('') }
                </ul>
            `
            : ''}

            </a>
        </li>
    `);
}

setTimeout(() => {
    constructor();
}, 100);