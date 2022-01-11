
function dispara_tour_heroi(){

    introJs().setOptions({
        steps: [{
            title: ' Explore nosso site!!',
            intro: 'Deseja iniciar um tour para conhecer melhor a plataforma? 👋'
        },
        {
            title: 'Filtre os assuntos',
            element: document.querySelector('.ls-select'),
            intro: 'Você pode filtrar a busca dos Anjos por assunto desejado, e escolher o Anjo que mais se identificou',
            position: 'bottom'
        },
        {
            title: 'Edite seu perfil',
            element: document.querySelector('.perfil'),
            intro: 'Aqui você pode atualizar todas as informações do seu perfil, como foto, senha e sua história',
            position: 'right'
        },
        {
            title: 'Acesse as conversas',
            element: document.querySelector('.conversas'),
            intro: ' Retome, avalie ou exclua conversas que já aconteceram.',
            position: 'right'
        },
        {
            title: 'Veja os agendamentos',
            element: document.querySelector('.agendamentos'),
            intro: 'Tenha acesso e gerencie seus agendamentos.',
            position: 'right'
        },
        {
            title: 'Veja o perfil do Anjo',
            element: document.querySelector('.btn.btn-primary.btn-white.completo'),
            intro: 'Ao clicar aqui você será direcionado para uma página com informações mais detalhadas sobre o Anjo, inclusive avaliações que ele já recebeu.',
            position: 'right'
        },
        {
            title: 'Financeiro',
            element: document.querySelector('.financeiro'),
            intro: 'Ao clicar aqui você irá para a página do financeiro onde poderá recarregar com cartão de crédito ou débito até mesmo pix ou boleto, você também pode recarregar e deixar o saldo para utilizar mais tarde.',
            position: 'right'
        },
        {
            title: 'Notificações',
            element: document.querySelector('.btn.header-item.noti-icon.waves-effect.notification'),
            intro: 'Acompanha atualizações e notificações para ficar por dentro de tudo.',
            position: 'left'
        },
        {
            title: "Nossos Anjos",
            element: document.querySelector('.nossosAnjos'),
            intro: 'Ao clicar nessa opção, você irá abrir a página onde verá todos os Anjos da plataforma, online e offline.',
            position: 'right'
        },
        {
            title: 'Inicie uma Conversa',
            element: document.querySelector('.btn.btn-primary.btn-blue.iniciar-atendimento'),
            intro: 'Ao clicar aqui você será direcionado para uma sala de espera onde iremos obter algumas informações para seu Anjo poder lhe ajudar da melhor forma. Logo você será atendido.',
            position: 'top'
        },
        {
            title: 'Agende uma conversa',
            element: document.querySelector('.btn.btn-primary.agend'),
            intro: 'Ao clicar aqui você será direcionado para uma página de agendamento, onde poderá agendar hora e dia da conversa.',
            position: 'top',
            step: '7'
        },
        {
            title: 'Seu saldo',
            element: document.querySelector('.col-6.financeiro'),
            intro: 'Aqui você acompanha seu saldo atual.',
            position: 'left',
            step: '12'
        }]
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





if(screen.width < 768) {
    introJs().setOptions({
        steps: [{
            title: ' Explore nosso site!!',
            intro: 'Deseja iniciar um tour para conhecer melhor a plataforma? 👋'
        },
        {
            title: 'Notificações',
            element: document.querySelector('.btn.header-item.noti-icon.waves-effect.notification'),
            intro: 'Acompanha atualizações e notificações para ficar por dentro de tudo.',
            position: 'bottom'
        },
        {
            title: 'Filtre os assuntos',
            element: document.querySelector('.ls-select'),
            intro: 'Você pode filtrar a busca dos Anjos por assunto desejado, e escolher o Anjo que mais se identificou',
            position: 'bottom'
        },
        {
            title: "Nossos Anjos",
            element: document.querySelector('.nossosAnjos'),
            intro: 'Ao clicar nessa opção, você irá abrir a página onde verá todos os Anjos da plataforma, online e offline.',
            position: 'right'
        },
        {
            title: 'Edite seu perfil',
            element: document.querySelector('.perfil'),
            intro: 'Aqui você pode atualizar todas as informações do seu perfil, como foto, senha e sua história',
            position: 'right'
        },
        {
            title: 'Financeiro',
            element: document.querySelector('.financeiro'),
            intro: 'Ao clicar aqui você irá para a página do financeiro onde poderá recarregar com cartão de crédito ou débito até mesmo pix ou boleto, você também pode recarregar e deixar o saldo para utilizar mais tarde.',
            position: 'right'
        },
        {
            title: 'Acesse as conversas',
            element: document.querySelector('.conversas'),
            intro: ' Retome, avalie ou exclua conversas que já aconteceram.',
            position: 'right'
        },
        {
            title: 'Veja os agendamentos',
            element: document.querySelector('.agendamentos'),
            intro: 'Tenha acesso e gerencie seus agendamentos.',
            position: 'right'
        },
        {
            title: 'Inicie uma Conversa',
            element: document.querySelector('.atend'),
            intro: 'Ao clicar aqui você será direcionado para uma sala de espera onde iremos obter algumas informações para seu Anjo poder lhe ajudar da melhor forma. Logo você será atendido.',
            position: 'top'
        },
        {
            title: 'Agende uma conversa',
            element: document.querySelector('.btn.btn-primary.agendar'),
            intro: 'Ao clicar aqui você será direcionado para uma página de agendamento, onde poderá agendar hora e dia da conversa.',
            position: 'top'
        },
        {
            title: 'Veja o perfil do Anjo',
            element: document.querySelector('.verperfil'),
            intro: 'Ao clicar aqui você será direcionado para uma página com informações mais detalhadas sobre o Anjo, inclusive avaliações que ele já recebeu.',
            position: 'right'
        },
        {
            title: 'Seu saldo',
            element: document.querySelector('.col-6.financeiro'),
            intro: 'Aqui você acompanha seu saldo atual.',
            position: 'left'
        }]
        }).start();


        $(document).ready(function() {

            $(".vertical-menu.mm-active").css("display","block");


            $("#vertical-menu-btn").on('click', function() {
                $(".vertical-menu.mm-active").toggle();
            });

        });

}
}
