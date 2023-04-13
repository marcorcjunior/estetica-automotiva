
const listaExemplo = [
    {
        nome: 'Serviço 1 com titulo grande',
        descricao: 'Descrição do serviço 1 e com descrição grande também!',
        valor: 49.90
    },
    {
        nome: 'Serviço 2',
        descricao: 'Descrição do serviço 2',
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
    },
];

let listaServico = null;

constructor = () => {
    listaServico = document.getElementById('listaServicos');

    for (let index = 0; index < listaExemplo.length; index++) {
        const servico = listaExemplo[index];
        listaServico.insertAdjacentHTML(
            'beforeend',
            itemLista(index, servico)
        );

    }
}

itemLista = (
    posicao,
    {
        nome,
        descricao,
        valor
    }) => {

    const sendParameters = new URLSearchParams(
        {
            nome,
            descricao,
            valor
        }
    );

    return (`
        <li class="container row ${posicao % 2 ? 'row--white' : 'row--whitesmoke'}" >
            <a onclick="location.href = './form.html?${sendParameters.toString()}'">
                <div class="container-row align-center">
                    <label style="font-size: large;">
                        ${nome}
                    </label>
        
                    <div class="container"></div>
        
                    <div style="padding-left: 32px;">
                        <label class="font-price">
                            ${formateCurrencyPTBr(valor)}
                        </label>
                    </div>
        
                    <button class="button-arrow-list">
                        <span alt="sair" class="material-symbols-outlined" style="font-size: 36px;">
                            navigate_next
                        </span>
                    </button>
                </div>
        
                <br />

                <label>
                    ${descricao}
                </label>
            </a>
        </li>
    `);
}

setTimeout(() => {
    constructor();
}, 100);