const listaExemplo = [
    {
        nome: 'Cliente teste com nome grande para teste',
        documento: '00000000000',
        email: 'cliente@email.com',
        telefone: '(00) 00000-0000',
        carros: []
    },
    {
        nome: 'Cliente teste 1',
        documento: '00000000000',
        email: 'cliente@email.com',
        telefone: '(00) 90000-0000',
        carros: [
            {
                modelo: 'Honda city - cinza',
                ano: 2011,
                placa: 'SED4587'
            },
            {
                modelo: 'Volkswagen gol g3 - preto',
                ano: 2005,
                placa: 'RET7891'
            },
        ]
    },
    {
        nome: 'Cliente teste 2',
        documento: '20000000000',
        email: 'cliente2@email.com',
        telefone: '(20) 90000-0000',
        carros: [
            {
                modelo: 'Honda hrv - vinho',
                ano: 2018,
                placa: 'SUB1234'
            }
        ]
    },
    {
        nome: 'Cliente teste 3',
        documento: '30000000000',
        email: 'cliente3@email.com',
        telefone: '(30) 90000-0000',
        carros: [
            {
                modelo: 'Honda fity - prata',
                ano: 2020,
                placa: 'RET4567'
            }
        ]
    },
];

let listaClientes = null;

constructor = () => {
    listaClientes = document.getElementById('listaClientes');

    for (let index = 0; index < listaExemplo.length; index++) {
        const servico = listaExemplo[index];
        listaClientes.insertAdjacentHTML(
            'beforeend',
            itemLista(index, servico)
        );

    }
}

itemLista = (posicao, cliente) => {

    const sendParameters = new URLSearchParams(cliente);

    return (`
        <li class="container row ${posicao % 2 ? 'row--white' : 'row--whitesmoke'}" >
            <a onclick="location.href = './form.html?${sendParameters.toString()}'">
                <div class="container-row" style="display: flex; align-items: center; justify-content: center;">

                    <label style="font-size: large;">
                        ${cliente.nome} - ${formatCnpjCpf(cliente.documento)}
                    </label>

                    <div class="container"></div>

                    <button class="button-arrow-list">
                        <span alt="sair" class="material-symbols-outlined" style="font-size: 36px;">
                            navigate_next
                        </span>
                    </button>
                </div>

                <br />

                <label>
                    ${cliente.email} - ${cliente.telefone}
                </label>

                <hr style="margin-top: 16px; margin-bottom: 16px;" />
                <ol>
                ${cliente.carros.length ? `
                    ${cliente.carros.map(
                        ({ modelo, ano, placa }) =>
                            `<li>
                                ${modelo} - ${ano} - ${placa}
                            </li>
                            <br />
                            `
                        ).join('') }
                `
                : `
                    <li>Sem carro cadastrado!</li>
                    <br />     
                `}
                </ol>
            </a>
        </li>
    `);
}

deleteCarro = (id) => {
    const element = document.getElementById(id);
    console.warn(element);
    element.remove();
};

clearFormCarro = () => {
    document.getElementById('modelo').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('placa').value = '';
}

addCarro = () => {
    
    const listaCarros = document.getElementById('listaCarros');
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const placa = document.getElementById('placa').value;

    const id = `${modelo}-${ano}-${placa}`.replaceAll(' ', '').toLowerCase();

    if(modelo.replaceAll(' ', '') == '' || ano.replaceAll(' ', '') == '' || placa.replaceAll(' ', '') == '') {
        alert('É necesario preencher todos os dados referentes ao carro!');
        return;
    }

    const item = `
    <div class="container-row" id="${id}">
        <div class="container-row" style="flex-wrap: wrap;">
            <input readonly value="${modelo}" id="modelo-${modelo}" placeholder="Modelo" class="container" />
            <input readonly value="${ano}" id="ano-${ano}" placeholder="Ano" class="container" />
            <input readonly value="${placa}" id="placa-${placa}" placeholder="Placa" class="container" />                        
        </div>

        <div style="display: flex; flex-direction: column; margin-left: 8px;">
            <div class="container"></div>
            <button class="button-add-aux" type="button" style="background-color: var(--error-color);" onclick="deleteCarro('${id}')">
                <div class="container"></div>
                <div class="container">
                    <span alt="sair" class="material-symbols-outlined" style="font-size: 24px;">
                        delete
                    </span>
                </div>
                <div class="container"></div>
            </button>
            <div class="container"></div>
        </div>
    </div>`;

    listaCarros.insertAdjacentHTML('beforeend',(item));

    clearFormCarro();
}


setTimeout(() => {
    constructor();
}, 100);