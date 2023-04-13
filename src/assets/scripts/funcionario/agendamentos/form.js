deleteServico = (id) => {
    const element = document.getElementById(id);
    element.remove();
};

clearFormServicos = () => {
    document.getElementById('servicos').value = '';
}

addServico = () => {
    
    const listaServicos = document.getElementById('listaServicos');
    const servicos = document.getElementById('servicos').value;

    const id = `servico-${servicos}`.replaceAll(' ', '').toLowerCase();

    if(servicos.replaceAll(' ', '') == '') {
        alert('É necesario selecionar um serviço!');
        return;
    }

    const item = `
    <div class="container-row" id="${id}">
        <div class="container-row" style="flex-wrap: wrap;">
            <input readonly value="${servicos}" id="servico-${servicos}" class="container" />
        </div>

        <div style="display: flex; flex-direction: column; margin-left: 8px;">
            <div class="container"></div>
            <button class="button-add-aux" type="button" style="background-color: var(--error-color);" onclick="deleteServico('${id}')">
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

    listaServicos.insertAdjacentHTML('beforeend',(item));

    clearFormServicos();
}
