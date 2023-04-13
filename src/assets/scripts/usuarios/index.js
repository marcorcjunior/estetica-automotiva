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
