constructor = () => {
    events();
}

events = () => {
    document.getElementById("formLogin").addEventListener("submit", (e) => {
        e.preventDefault();

        setLogar(
            getObjectFromForm(e.target)
        );

    });
}

setLogar = ({ email, senha }) => {
    if (isAdmin({ email, senha })) {
        location.href = PAGINAS.FUNCIONARIO.AGENDAMENTOS;
        return;
    }

    location.href = PAGINAS.CLIENTE.AGENDAMENTOS;
}

setTimeout(() => {
    constructor();
}, 100);