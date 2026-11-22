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
    image: 'assets/Feira%20Noturna%20-%20Barueri/feira-noturna-de-barueri.jpg',
    gallery: [
        'assets/Feira%20Noturna%20-%20Barueri/feira-noturna-de-barueri.jpg',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04611.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04613.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04616.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04622.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04624.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04638.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04652.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04653.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04674.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04675.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04678.JPG',
        'assets/Feira%20Noturna%20-%20Barueri/DSC04680.JPG'
    ],
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
    image: 'assets/Fabrica%20de%20Cultura-%20Cap%C3%A3o%20Redondo/F%C3%A1brica-Cap%C3%A3o-site.jpg',
    gallery: [
        'assets/Fabrica%20de%20Cultura-%20Cap%C3%A3o%20Redondo/F%C3%A1brica-Cap%C3%A3o-site.jpg',
        'assets/Fabrica%20de%20Cultura-%20Cap%C3%A3o%20Redondo/68d5483f0e54211ce2f442a8.jpg',
        'assets/Fabrica%20de%20Cultura-%20Cap%C3%A3o%20Redondo/batuque-rochdale-baque-mulher-credito-divulgacao.jpg',
        'assets/Fabrica%20de%20Cultura-%20Cap%C3%A3o%20Redondo/Fabrica-Cultura-06-A-site.jpg',
        'assets/Fabrica%20de%20Cultura-%20Cap%C3%A3o%20Redondo/fabrica-de-cultura_862bcd50.jpg',
        'assets/Fabrica%20de%20Cultura-%20Cap%C3%A3o%20Redondo/sp_criancas_passeio_fabrica_de_cultura_03-800x533.jpg'
    ],
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
    image: 'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/images.jpeg',
    gallery: [
        'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/images.jpeg',
        'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/1636751097618ed6f91cafb_1636751097_3x2_md.jpg',
        'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/images%20%281%29.jpeg',
        'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/images%20%282%29.jpeg',
        'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/images%20%283%29.jpeg',
        'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/entrada2-min.jpg',
        'assets/Centro%20Cultural%20Graja%C3%BA/Centro%20cultural%20grajau/d843c002-3d89-4c82-9c9f-814caa339939_rw_3840.jpg'
    ],
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
    image: 'assets/Colonia%20parelheiros/ecojusa.jpg',
    gallery: [
        'assets/Colonia%20parelheiros/ecojusa.jpg',
        'assets/Colonia%20parelheiros/30bf80d9-7ef4-4a3f-9eaa-60f5a2bbd2a1.jpg',
        'assets/Colonia%20parelheiros/404b8ca3-1489-4150-8f28-326bbc60f8da.jpg',
        'assets/Colonia%20parelheiros/59118789-e272-44e7-9d37-33f67843eefb.jpg',
        'assets/Colonia%20parelheiros/7511339a-6c4f-4804-8c31-fff0ca194734.jpg',
        'assets/Colonia%20parelheiros/7622bbde-537b-4ddf-9265-8ba46e01bd72.jpg',
        'assets/Colonia%20parelheiros/7d995167-3e0b-4979-aadb-87d48612aae7%20(1).jpg',
        'assets/Colonia%20parelheiros/7f856bab-c091-47ba-ac90-fecb575cbc34.jpg',
        'assets/Colonia%20parelheiros/9c0340d2-9752-4d1f-9966-bc02c983140b.jpg',
        'assets/Colonia%20parelheiros/d5e43335-21f3-42c3-beeb-d345760bd907.jpg',
        'assets/Colonia%20parelheiros/e55d364f-51a3-400d-aa9e-838b69fe1f93.jpg',
        'assets/Colonia%20parelheiros/f882d1e6-7867-4204-8c32-a5784b12f7cf.jpg',
        'assets/Colonia%20parelheiros/IMG_3127.jpg',
        'assets/Colonia%20parelheiros/IMG_4049.jpg'
    ],
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
    image: 'assets/Sesc%20Interlagos/IMG_9684-scaled.jpg',
    gallery: [
        'assets/Sesc%20Interlagos/IMG_9684-scaled.jpg',
        'assets/Sesc%20Interlagos/20260215_102316.jpg',
        'assets/Sesc%20Interlagos/20260215_103125.jpg',
        'assets/Sesc%20Interlagos/20260215_132023.jpg',
        'assets/Sesc%20Interlagos/20260216_112926.jpg',
        'assets/Sesc%20Interlagos/20260216_123239.jpg',
        'assets/Sesc%20Interlagos/20260216_123240.jpg',
        'assets/Sesc%20Interlagos/20260216_145328.jpg',
        'assets/Sesc%20Interlagos/20260216_152555.jpg',
        'assets/Sesc%20Interlagos/20260216_153653.jpg'
    ],
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
    image: 'assets/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/images.jpeg',
    gallery: [
        'assets/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/images.jpeg',
        'assets/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/circular-turismo-sp.jpeg',
        'assets/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/DSC_0625.jpg',
        'assets/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/img_1658.jpg',
        'assets/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/onibus-turismo-sp.jpg',
        'assets/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/Onibus%20Turistico%20de%20S%C3%A3o%20Paulo/volvo-hibrido-txt_620x467.jpg'
    ],
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
    id: 'solo-sagrado',
    title: 'Solo Sagrado de Guarapiranga',
    city: 'Parelheiros — São Paulo — SP',
    tags: ['natureza', 'historia', 'bate-volta'],
    free: true,
    image: 'assets/Solo%20Sagrado%20-%20Guarapiranga/solo-sagrado-de-guarapiranga.jpg',
    gallery: [
        'assets/Solo%20Sagrado%20-%20Guarapiranga/solo-sagrado-de-guarapiranga.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20260308_122103.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20260308_122119.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20260308_122122.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20261102_082332.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20261102_103359.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20261102_103819.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20261102_105024.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20261102_105753.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20261102_114728.jpg',
        'assets/Solo%20Sagrado%20-%20Guarapiranga/20261102_114805.jpg'
    ],
    blurb: 'Um espaço de contemplação e jardins japoneses às margens da represa de Guarapiranga, no extremo sul de São Paulo.',
    quick: {
        time: '2 a 3 horas',
        cost: 'Visitação gratuita'
    },
    quote: 'Um refúgio de jardins e tranquilidade na zona sul de São Paulo.',
    history: 'O Solo Sagrado de Guarapiranga é um centro espiritual e espaço de contemplação ligado à Igreja Messiânica Mundial. Seu projeto paisagístico integra jardins, áreas verdes e a paisagem da represa de Guarapiranga.',
    about: 'Localizado em Parelheiros, o Solo Sagrado reúne jardins e espaços de contemplação junto à represa. É um passeio para apreciar a paisagem, caminhar com calma e conhecer um importante espaço espiritual e cultural da zona sul paulistana.',
    todo: ['Caminhar pelos jardins', 'Conhecer os espaços de contemplação', 'Observar a paisagem da represa', 'Fotografar a natureza e a arquitetura'],
    info: {
        duration: '2 a 3 horas',
        cost: 'Visitação gratuita; confirme as condições para a data escolhida',
        hours: 'A visitação ocorre conforme programação. Consulte os canais oficiais antes de ir.',
        how: 'Av. Professor Hermann von Ihering, 6567 — Parelheiros, São Paulo — SP. Confira as orientações de acesso nos canais oficiais.'
    },
    tiktok: {
        handle: '@viajemsp',
        text: 'Um passeio por jardins e paisagens na zona sul de São Paulo 🌿'
    },
    tips: ['Confira dias, horários e regras de visitação antes de sair', 'Use calçado confortável para caminhar pelos jardins', 'Respeite as orientações do espaço e mantenha o ambiente tranquilo'],
    coords: [-23.7508358, -46.7451455],
    weather: [-23.7508358, -46.7451455]
}, {
    id: 'embu',
    title: 'Embu das Artes',
    city: 'Embu das Artes — SP',
    tags: ['arte', 'feiras', 'gastronomia'],
    free: false,
    image: 'assets/Embu%20das%20Artes/embudasartes.png',
    gallery: [
        'assets/Embu%20das%20Artes/embudasartes.png',
        'assets/Embu%20das%20Artes/caninha.jpg',
        'assets/Embu%20das%20Artes/embu-das-artes-1-1.jpg',
        'assets/Embu%20das%20Artes/embu-das-artes-2-scaled.jpg',
        'assets/Embu%20das%20Artes/images%20(1).jpeg',
        'assets/Embu%20das%20Artes/images.jpeg',
        'assets/Embu%20das%20Artes/mariabonita-%20embu-das-artes.jpeg',
        'assets/Embu%20das%20Artes/Olhando-arte-1-scaled.jpg',
        'assets/Embu%20das%20Artes/O-que-fazer-em-Embu-das-Artes.jpg',
        'assets/Embu%20das%20Artes/unidade-embu-das-artes.jpg',
        'assets/Embu%20das%20Artes/unidade-embu-das-artes-7.jpg'
    ],
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
}];
