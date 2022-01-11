
function dispara_tour_anjo(){

if(screen.width > 768) {
introJs().setOptions({
    steps: [{
        title: ' Explore nosso site!!',
        intro: 'Deseja iniciar um tour para conhecer melhor a plataforma? 👋',
        step: '1'
    },
    {
        title: 'Heróis em sala de espera',
        element: document.querySelector('.hero'),
        intro: 'Aqui irão aparecer os Heróis que escolheram você para conversar. Atenda eles o quanto antes, para que não desistam de esperar.',
        position: 'bottom',
        step: '2'
    },
    {
        title: 'Resumo de atendimentos',
        element: document.querySelector('.resumo'),
        intro: 'Aqui irá aparecer um resumo dos últimos atendimentos, separando em chamadas atendidas, perdidas os pagamentos e avaliações recebidos. ',
        position: 'right',
        step: '3'
    },
    {
        title: 'Últimas conversas',
        element: document.querySelector('.lastTalk'),
        intro: 'Ao clicar aqui, você terá uma lista das suas conversas, acesse quando quiser.',
        step: '4',
        position: 'right'
    },
    {
        title: 'Veja os agendamentos',
        element: document.querySelector('.agendamento'),
        intro: 'Tenha acesso e gerencie seus agendamentos.',
        position: 'right',
        step: '5'
    },
    {
        title: 'Avaliações',
        element: document.querySelector('.avaliar'),
        intro: 'Tenha acesso quando quiser as suas avaliações.',
        position: 'top',
        step: '6'
    },
    {
        title: 'Status',
        element: document.querySelector('.status'),
        intro: 'Você pode alterar seu status (online / offline) quando quiser.',
        position: 'left',
        step: '6'
    },
    {
        title: 'Financeiro',
        element: document.querySelector('.card.financeiro'),
        intro: 'Na tela de financeiro, você tem acesso á todo o histórico de pagamentos recebidos. Acesse seu Saldo, seu Histórico de Pagamentos e solicite seu dinheiro de forma simples e rápida.',
        position: 'left',
        step: '8'
    }, ]
    }).start();

    if(document.getElementById('introjs').style.position == 'fixed') {
        document.getElementById('body').style.overflow = 'hidden';
    }
    document.getElementById("overflow").addEventListener("click", function() {
        document.getElementById("body").style.overflow = "auto";
    });

    document.getElementById("introjs").addEventListener("click", function() {
        document.getElementById("body").style.overflow = "auto";
    });


    $(document).ready(function() {

        $("#drop").addClass("show");
        $("#page-header-user-dropdown").attr("aria-expanded","true");
        $("#drop2").addClass("show");

        document.getElementById("introjs").addEventListener("click", function() {
            $("#drop").removeClass("show");
            $("#page-header-user-dropdown").attr("aria-expanded","false");
            $("#drop2").removeClass("show");
        });

    });

}


    if(screen.width < 768) {

        introJs().setOptions({
            steps: [{
                title: ' Explore nosso site!!',
                intro: 'Deseja iniciar um tour para conhecer melhor a plataforma? 👋',
                step: '1'
            },
            {
                title: 'Status',
                element: document.querySelector('.status'),
                intro: 'Você pode alterar seu status (online / offline) quando quiser.',
                position: 'bottom'
            },
            {
                title: 'Avaliações',
                element: document.querySelector('.avaliar'),
                intro: 'Tenha acesso quando quiser as suas avaliações.',
                position: 'top'
            },
            {
                title: 'Heróis em sala de espera',
                element: document.querySelector('.hero'),
                intro: 'Aqui irão aparecer os Heróis que escolheram você para conversar. Atenda eles o quanto antes, para que não desistam de esperar.',
                position: 'bottom'
            },
            {
                title: 'Últimas conversas',
                element: document.querySelector('.lastTalk'),
                intro: 'Ao clicar aqui, você terá uma lista das suas conversas, acesse quando quiser.',
                position: 'bottom'
            },
            {
                title: 'Veja os agendamentos',
                element: document.querySelector('.agendamento'),
                intro: 'Tenha acesso e gerencie seus agendamentos.',
                position: 'top'
            },
            {
                title: 'Resumo de atendimentos',
                element: document.querySelector('.resumo'),
                intro: 'Aqui irá aparecer um resumo dos últimos atendimentos, separando em chamadas atendidas, perdidas os pagamentos e avaliações recebidos. ',
                position: 'left'
            },
            {
                title: 'Financeiro',
                element: document.querySelector('.card.financeiro'),
                intro: 'Na tela de financeiro, você tem acesso á todo o histórico de pagamentos recebidos. Acesse seu Saldo, seu Histórico de Pagamentos e solicite seu dinheiro de forma simples e rápida.'
            }, ]
            }).start();



            $(document).ready(function() {

                $("#drop").addClass("show");
                $("#page-header-user-dropdown").attr("aria-expanded","true");
                $("#drop2").addClass("show");

                $(".vertical-menu.mm-active").css("display","block");

                document.getElementById("introjs").addEventListener("click", function() {
                    $("#drop").removeClass("show");
                    $("#page-header-user-dropdown").attr("aria-expanded","false");
                    $("#drop2").removeClass("show");
                    $(".vertical-menu.mm-active").css("display","none");
                });

                document.getElementById("overflow").addEventListener("click", function() {
                    $("#drop").removeClass("show");
                    $("#page-header-user-dropdown").attr("aria-expanded","false");
                    $("#drop2").removeClass("show");
                    $(".vertical-menu.mm-active").css("display","none");
                });


            });
    }
}  
