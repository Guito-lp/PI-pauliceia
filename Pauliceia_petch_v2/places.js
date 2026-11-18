/* Dados dos lugares — fonte única usada por explorar.html e lugar.html.
   Campos marcados com "verificar" devem ser conferidos antes de publicar. */
window.TAGS = {
    feiras: {
        label: '',
        icon: '',
        cls: 't-yellow'
    },
    gastronomia: {
        label: '',
        icon: '',
        cls: 't-red'
    },
    inusitado: {
        label: '',
        icon: '',
        cls: 't-orange'
    },
    cultura: {
        label: '',
        icon: '',
        cls: 't-blue'
    },
    arte: {
        label: '',
        icon: '',
        cls: 't-pink'
    },
    musica: {
        label: '',
        icon: '',
        cls: 't-magenta'
    },
    gratuito: {
        label: '',
        icon: '',
        cls: 't-green'
    },
    natureza: {
        label: '',
        icon: '',
        cls: 't-leaf'
    },
    historia: {
        label: '',
        icon: '',
        cls: 't-purple'
    },
    'bate-volta': {
        label: '',
        icon: '',
        cls: 't-teal'
    }
};

// (LOCAL ONDE AS FOTOS SÃO PUXADAS)
window.PLACES = [{
    id: 'barueri',
    title: 'Feira Noturna de Barueri',
    city: 'Barueri — SP',
    tags: ['feiras', 'gastronomia', 'inusitado'],
    free: false,
    image: 'assets/category-food.png',
    gallery: ['assets/category-food.png', 'assets/category-events.png', 'assets/category-culture.png'],
    blurb: '300+ expositores de comida do mundo inteiro, artesanato e shows ao vivo — mas só depois que o sol se põe.',
    quick: {
        time: '2 a 4 horas',
        cost: 'Entrada livre'
    },
    quote: 'Você provavelmente passou perto e nunca entrou.',
    history: 'Criada para revitalizar o espaço público de Barueri, a feira cresceu organicamente ao longo dos anos 2000 e hoje é referência na Grande São Paulo. Inspirada em feiras noturnas asiáticas, tem identidade própria com sabores e cultura tipicamente brasileiros.',
    about: 'A Feira Noturna de Barueri é um dos programas mais movimentados da Grande SP. Com mais de 300 expositores, o espaço se transforma em uma cidade dentro da cidade assim que o sol se põe. Barracas de comida de todo o mundo, artesanato regional, shows ao vivo e muito mais fazem dessa feira um programa imperdível para quem quer sair do óbvio.',
    todo: ['Gastronomia de todo o mundo', 'Artesanato local', 'Shows ao vivo', 'Cervejas artesanais', 'Souvenirs'],
    info: {
        duration: '2 a 4 horas',
        cost: 'Entrada gratuita · Consumo a partir de R$10',
        hours: 'Quintas, sextas e sábados, das 18h às 01h',
        how: 'CPTM Linha 8 (Diamante), estação Barueri. Ônibus da região metropolitana. De carro: 30 min do centro de SP pela Rodovia Castello Branco.'
    },
    tiktok: {
        handle: '@feirabarueri',
        text: 'A feira que a Grande SP não sabia que precisava 🌙'
    },
    tips: ['Vá com fome e divida os pratos para provar mais coisas', 'Chegue antes das 20h para fugir das filas', 'Leve dinheiro e cartão — nem toda barraca aceita os dois'],
    coords: [-23.5106, -46.8761],
    weather: [-23.5106, -46.8761]
}, {
    id: 'fabrica',
    title: 'Fábrica de Cultura — Capão Redondo',
    city: 'São Paulo — SP',
    tags: ['cultura', 'arte', 'musica'],
    free: true,
    image: 'assets/category-culture.png',
    gallery: ['assets/category-culture.png', 'assets/category-events.png', 'assets/category-photography.png'],
    blurb: 'Centro cultural do Estado de SP na quebrada que forma artistas, músicos e atores — de graça.',
    quick: {
        time: '1 a 3 horas',
        cost: 'Entrada gratuita'
    },
    quote: 'Rolê barato detectado. 💸 Aliás, de graça.',
    history: 'As Fábricas de Cultura nasceram para levar formação artística a bairros distantes do centro. A unidade do Capão Redondo virou ponto de encontro de jovens artistas e referência de cultura de bairro na zona sul.',
    about: 'Oficinas de música, dança, teatro e artes visuais, além de biblioteca, shows e espetáculos abertos ao público. É um lugar para ficar a tarde inteira, descobrir talentos locais e conhecer a cena cultural da zona sul por dentro.',
    todo: ['Workshops gratuitos de música e dança', 'Shows e espetáculos', 'Exposições de arte urbana', 'Biblioteca especializada em artes'],
    info: {
        duration: '1 a 3 horas',
        cost: 'Entrada gratuita · Cursos gratuitos',
        hours: 'Terça a sexta: 9h–21h · Sábado e domingo: 10h–19h',
        how: 'Metrô Linha 5 (Lilás), estação Capão Redondo, a 10 minutos a pé. Ônibus 7227 e 5735.'
    },
    tiktok: {
        handle: '@guiadesp',
        text: 'Cultura de graça na zona sul e ninguém me avisou 🎶'
    },
    tips: ['Confira a programação no site antes — shows lotam rápido', 'A biblioteca especializada em artes é aberta ao público', 'Tem lanchonete popular no local com preços acessíveis'],
    coords: [-23.6585, -46.7788],
    weather: [-23.6585, -46.7788]
}, {
    id: 'grajau',
    title: 'Centro Cultural Grajaú',
    city: 'São Paulo — SP',
    tags: ['cultura', 'arte', 'gratuito'],
    free: true,
    image: 'assets/destination-grajau.png',
    gallery: ['assets/destination-grajau.png', 'assets/category-events.png', 'assets/category-hidden.png'],
    blurb: 'Espaço cultural no extremo sul que transformou a cena artística do Grajaú — e de graça.',
    quick: {
        time: '1 a 2 horas',
        cost: 'Entrada gratuita'
    },
    quote: 'Esse lugar existe mesmo. E é de graça.',
    history: 'O Grajaú foi por décadas um bairro invisível no mapa cultural paulistano. Com a abertura do Centro Cultural, a região passou a ser destino de artistas de toda a cidade que chegam para exposições, residências e intercâmbios culturais.',
    about: 'O Centro Cultural Grajaú é a principal referência cultural do extremo sul de São Paulo. Localizado no Jardim Grajaú, o espaço recebe exposições de arte contemporânea, shows de música, peças de teatro e oficinas culturais para todas as idades, levando cultura para quem nunca chegou ao centro.',
    todo: ['Exposições de arte contemporânea', 'Shows de música', 'Peças de teatro', 'Oficinas culturais'],
    info: {
        duration: '1 a 2 horas',
        cost: 'Entrada gratuita',
        hours: 'Terça a domingo: 10h–18h · Segunda fechado',
        how: 'CPTM Linha 9 (Esmeralda), estação Grajaú, e ônibus pelo bairro (linhas 4711 e 4713).'
    },
    tiktok: {
        handle: '@guiadesp',
        text: 'Fui conhecer o Grajaú cultural e me surpreendi 🎭'
    },
    tips: ['Confira a agenda de exposições e peças antes de ir', 'Vá com calma: o bairro é grande e o acesso leva tempo', 'Combine com um passeio pela represa Billings'],
    coords: [-23.7517, -46.6958],
    weather: [-23.7517, -46.6958]
}, {
    id: 'colonia',
    title: 'Colônia — Parelheiros',
    city: 'São Paulo — SP',
    tags: ['natureza', 'historia', 'bate-volta'],
    free: false,
    image: 'assets/destination-parelheiros.png',
    gallery: ['assets/destination-parelheiros.png', 'assets/category-nature.png', 'assets/category-hidden.png'],
    blurb: 'Uma colônia japonesa no extremo sul de SP com ryokans, feiras de orgânicos e estradas de terra entre bela natureza.',
    quick: {
        time: 'Meio dia ou dia inteiro',
        cost: 'Entrada livre'
    },
    quote: 'Japão em SP? Existe. E fica no extremo sul.',
    history: 'A região de Colônia, em Parelheiros, foi ocupada por imigrantes japoneses no século XX e preserva até hoje tradições agrícolas e culturais trazidas por eles, hoje misturadas ao ritmo do campo paulistano.',
    about: 'Entre áreas verdes, plantações e estradas de terra, Colônia reúne feiras de produtos orgânicos, ryokans (pousadas de estilo japonês) e caminhos para quem quer respirar ar puro sem sair da cidade de São Paulo.',
    todo: ['Feira de orgânicos', 'Hospedagem em ryokan', 'Caminhadas e trilhas leves', 'Fotografia de paisagem'],
    info: {
        duration: 'Meio dia ou dia inteiro',
        cost: 'Entrada livre · Ryokans a partir de R$120/noite',
        hours: 'Feiras: sábados e domingos a partir das 7h · Ryokans: reserva antecipada',
        how: 'Carro recomendado via Av. Engenheiro Armando de Arruda Pereira. Ônibus SPTrans linha 4715.'
    },
    tiktok: {
        handle: '@viajemsp',
        text: 'Esse cantinho de SP parece outro país 🍃'
    },
    tips: ['Saia cedo: as feiras são melhores pela manhã', 'Reserve o ryokan com antecedência', 'Leve água e protetor solar — há pouca sombra nas estradas'],
    coords: [-23.8850, -46.7080],
    weather: [-23.8850, -46.7080]
}, {
    id: 'sesc',
    title: 'SESC Interlagos',
    city: 'São Paulo — SP',
    tags: ['cultura', 'musica', 'arte'],
    free: false,
    image: 'assets/destination-sesc.png',
    gallery: ['assets/destination-sesc.png', 'assets/destination-ccsp.png', 'assets/category-history.png'],
    blurb: 'Complexo cultural premiado às margens da represa Guarapiranga — shows, exposições e vista épica.',
    quick: {
        time: '2 a 5 horas',
        cost: 'Credencial SESC R$15–R$45'
    },
    quote: 'Prepare o celular. Esse rende foto. 📷',
    history: 'Inaugurado à beira da represa Guarapiranga, o SESC Interlagos combina arquitetura, áreas verdes e uma programação cultural gigante, que atrai gente de toda a cidade.',
    about: 'Teatro, cinema, shows, exposições, biblioteca, esportes e muita área para ficar à toa. O terraço com vista para a represa é um dos cantos mais fotogênicos da zona sul.',
    todo: ['Shows ao vivo com entrada acessível', 'Teatro e dança contemporânea', 'Cinema independente', 'Exposições de arte', 'Terraço com vista para a represa'],
    info: {
        duration: '2 a 5 horas',
        cost: 'Credencial SESC: R$15–R$45 · Não-credenciados: R$45–R$135',
        hours: 'Terça a sexta: 9h–22h · Sábado: 9h–20h · Domingo: 9h–18h',
        how: 'CPTM Linha 9 (Esmeralda), estação Autódromo, e ônibus. De carro pela Av. Interlagos.'
    },
    tiktok: {
        handle: '@guiadesp',
        text: 'Esse SESC tem vista pra represa e eu só fui descobrir agora 👀'
    },
    tips: ['A credencial SESC vale muito se você for mais de duas vezes por mês', 'Domingo de manhã tem menos movimento e mais tranquilidade', 'A livraria do SESC tem curadoria excelente — não pule'],
    coords: [-23.6865, -46.6798],
    weather: [-23.6865, -46.6798]
}, {
    id: 'onibus',
    title: 'Ônibus Turístico de São Paulo',
    city: 'São Paulo — SP',
    tags: ['historia', 'inusitado', 'cultura'],
    free: false,
    image: 'assets/category-history.png',
    gallery: ['assets/category-history.png', 'assets/category-culture.png', 'assets/category-hidden.png'],
    blurb: 'Tour em ônibus de dois andares descapotado pelo centro histórico. Parece Europa, mas é SP.',
    quick: {
        time: '2h30 o percurso',
        cost: 'R$50 por pessoa'
    },
    quote: 'Vale o rolê? 👀 Definitivamente sim.',
    history: 'Inspirado nos famosos ônibus turísticos de Londres e Paris, o SP City Tour foi criado para democratizar o conhecimento do patrimônio histórico paulistano e mostrar a cidade de um ângulo diferente para quem já mora aqui.',
    about: 'O SP City Tour é um tour em ônibus de dois andares com teto aberto que percorre o centro histórico de São Paulo. A rota passa por mais de 25 pontos turísticos incluindo o Theatro Municipal, o Museu do Ipiranga, o Parque do Ibirapuera e a Av. Paulista — com audio-guia em português e inglês.',
    todo: ['Tour pelo centro histórico e Av. Paulista', 'Theatro Municipal', 'Parque do Ibirapuera', 'Pinacoteca do Estado', 'Vista de cima dos maiores monumentos'],
    info: {
        duration: '2h30 o percurso completo',
        cost: 'R$50 por pessoa · Crianças até 5 anos grátis',
        hours: 'Diariamente: 9h–17h, saídas a cada hora',
        how: 'Saída da Praça da República, no centro de São Paulo. Metrô República (Linha 3-Vermelha).'
    },
    tiktok: {
        handle: '@turismoemsp',
        text: 'Fiz o tour turístico de SP e me arrependi de não ter feito antes 🚌'
    },
    tips: ['Sente no andar de cima — a vista compensa', 'Leve protetor solar e boné', 'Confirme no site oficial se dá para descer e voltar a embarcar nas paradas'],
    coords: [-23.5434, -46.6430],
    weather: [-23.5434, -46.6430]
}, {
    id: 'paranapiacaba',
    title: 'Estação da Luz → Paranapiacaba',
    city: 'Santo André — SP',
    tags: ['historia', 'bate-volta', 'inusitado'],
    free: false,
    image: 'assets/destination-paranapiacaba.png',
    gallery: ['assets/destination-paranapiacaba.png', 'assets/category-daytrip.png', 'assets/category-nature.png'],
    blurb: 'Vila vitoriana de 1900 no topo da Serra do Mar com névoa o ano todo. Isso não deveria existir.',
    quick: {
        time: 'Dia inteiro (recomendado)',
        cost: 'Trem: R$5 (CPTM)'
    },
    quote: 'Isso não deveria existir. Mas existe. A 60km de SP.',
    history: 'Construída pelos ingleses da São Paulo Railway entre 1860 e 1900, Paranapiacaba foi planejada do zero como vila ferroviária. Quando a ferrovia foi encerrada nos anos 1870, a vila ficou congelada no tempo. Hoje é patrimônio nacional e uma das vilas ferroviárias mais preservadas do mundo.',
    about: 'Paranapiacaba é uma vila inglesa construída no fim do século XIX para abrigar os trabalhadores da ferrovia São Paulo Railway. Localizada no topo da Serra do Mar, a 60 km de São Paulo, a vila permanece quase intacta — com casas vitorianas, uma estação de trem em funcionamento e névoa permanente que cria uma atmosfera completamente única.',
    todo: ['Caminhar pela vila vitoriana', 'Visitar o museu e o funicular', 'Trilhas na Mata Atlântica', 'Fotografar a névoa'],
    info: {
        duration: 'Dia inteiro (recomendado)',
        cost: 'Trem: R$5 (CPTM) · Vila: acesso livre',
        hours: 'Vila sempre aberta · Museu: sáb, dom e feriados 10h–17h',
        how: 'Trem da CPTM Linha 10 (Turquesa) partindo da Estação da Luz. Viagem de 1h40. Saídas aos sábados e domingos.'
    },
    tiktok: {
        handle: '@viajemsp',
        text: 'A vila inglesa escondida a 60 km de SP 🌫️'
    },
    tips: ['Leve casaco: a névoa deixa tudo mais frio', 'Confirme horários do trem e do museu antes de sair', 'Use calçado confortável — as ruas são de pedra'],
    coords: [-23.7769, -46.3053],
    weather: [-23.7769, -46.3053]
}, {
    id: 'embu',
    title: 'Embu das Artes',
    city: 'Embu das Artes — SP',
    tags: ['arte', 'feiras', 'gastronomia'],
    free: false,
    image: 'assets/destination-embu.png',
    gallery: ['assets/destination-embu.png', 'assets/category-photography.png', 'assets/category-culture.png'],
    blurb: 'Cidade colonial a 28km de SP com a maior feira de artesanato do país. O fim de semana perfeito.',
    quick: {
        time: 'Meio dia ou dia inteiro',
        cost: 'Entrada livre'
    },
    quote: 'Você provavelmente passou perto e nunca entrou. Tá na hora.',
    history: 'O centro histórico de Embu preserva casarios coloniais e virou, ao longo do século XX, um polo de artistas e artesãos. A feira de artes e artesanato aos fins de semana é uma tradição consolidada.',
    about: 'Ruas de pedra, ateliês, lojas de antiguidades e restaurantes de comida caseira. Embu das Artes é programa para caminhar sem pressa, garimpar artesanato e provar a gastronomia local.',
    todo: ['Feira de artes e artesanato', 'Ateliês e galerias', 'Restaurantes de comida caseira', 'Caminhar pelo centro histórico'],
    info: {
        duration: 'Meio dia ou dia inteiro',
        cost: 'Entrada na cidade gratuita · Artesanato a partir de R$15',
        hours: 'Feira: sábados e domingos, 10h–18h · Centro histórico: sempre aberto',
        how: 'Carro pela Rodovia Régis Bittencourt (BR-116). Ônibus EMTU da Lapa ou Jabaquara.'
    },
    tiktok: {
        handle: '@viajemsp',
        text: 'Embu das Artes num domingo de manhã é outro nível 🎨'
    },
    tips: ['Vá cedo aos domingos para evitar o trânsito de volta', 'Pechinche com educação: faz parte da feira', 'Reserve o almoço se for em grupo'],
    coords: [-23.6489, -46.8527],
    weather: [-23.6489, -46.8527]
}, {
    id: 'ccsp',
    title: 'Centro Cultural São Paulo',
    city: 'São Paulo — SP',
    tags: ['cultura', 'arte', 'musica'],
    free: true,
    image: 'assets/destination-ccsp.png',
    gallery: ['assets/destination-ccsp.png', 'assets/category-events.png', 'assets/destination-sesc.png'],
    blurb: '47.000 m² de cultura de graça no centro da cidade. Biblioteca, cinema, shows, teatro e exposições.',
    quick: {
        time: '1 a 4 horas',
        cost: 'Entrada gratuita'
    },
    quote: 'Um prédio inteiro de cultura. De graça. Sem exagero.',
    history: 'Inaugurado em 1982, o CCSP foi pensado como um espaço de convivência cultural aberto à cidade, com arquitetura moderna e áreas que misturam biblioteca, salas de espetáculo e galerias.',
    about: 'Biblioteca, discoteca, cinema, teatro, mostras de artes visuais e uma agenda recheada de shows. Muita gente passa a tarde inteira por lá sem gastar nada.',
    todo: ['Ver exposições gratuitas', 'Ler na biblioteca', 'Assistir a shows e peças', 'Passear pelos jardins e terraços'],
    info: {
        duration: '1 a 4 horas',
        cost: 'Entrada gratuita · Alguns espetáculos podem ser pagos',
        hours: 'Confira o horário atualizado no site oficial',
        how: 'Metrô Linha 1 (Azul), estação Vergueiro, ao lado do prédio.'
    },
    tiktok: {
        handle: '@guiadesp',
        text: 'Esse rolê grátis no centro é muito subestimado 🎬'
    },
    tips: ['Consulte a agenda de shows e cinema antes de ir', 'Aproveite a biblioteca para um descanso no meio do dia', 'Combine com um passeio pela Av. Paulista, perto dali'],
    coords: [-23.5707, -46.6439],
    weather: [-23.5707, -46.6439]
}];

