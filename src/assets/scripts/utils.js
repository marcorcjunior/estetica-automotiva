
const PAGINAS = {
    COMUM: {
        LOGIN: './',
        RECUPERACAO_SENHA: './recuperacao-senha.html',
        CADASTRO: './recuperacao-senha.html',
    },
    CLIENTE: {
        AGENDAMENTOS: './pages/cliente/agendamentos',
        AGENDAMENTOS_FORMULARIO: './pages/cliente/agendamentos/form.html',
        MEUS_DADOS: './pages/cliente/meus-dados'
    },
    FUNCIONARIO: {
        AGENDAMENTOS: './pages/funcionario/agendamentos',
        AGENDAMENTOS_FORMULARIO: './pages/funcionario/agendamentos/form.html',

        CLIENTES: './pages/funcionario/clientes',
        CLIENTES_FORMULARIO: './pages/funcionario/clientes/form.html',

        SERVICOS: './pages/funcionario/servicos',
        SERVICOS_FORMULARIO: './pages/funcionario/servicos/form.html'
    }
}

getObjectFromForm = (form) => Object.fromEntries(new FormData(form));

isAdmin = ({ email, senha }) => email === 'admin@email.com' && senha === 'admin';

formateCurrencyPTBr = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

formatCnpjCpf = (value) => {
    const cnpjCpf = value.replace(/\D/g, '');

    if (cnpjCpf.length === 11) {
        return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
    }

    return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");
}