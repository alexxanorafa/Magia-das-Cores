// Sistema de Menu
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function(e) {
    e.stopPropagation();
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
});

document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
    }
});

document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-3px)";
    });
    item.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
    });
});

// Magia das Cores
const colorData = {
    red: {
        title: "Vermelho",
        description: "O vermelho é a cor da energia vital, da paixão e da ação. Está associado ao chakra raiz, que conecta você à terra e à sua força interior. Use o vermelho para aumentar sua motivação, coragem e vitalidade.",
        tips: [
            "Use roupas vermelhas em dias em que precisar de mais confiança e energia.",
            "Adicione velas vermelhas em rituais de proteção ou para atrair paixão.",
            "Incorpore cristais como rubi ou granada para amplificar a energia do vermelho."
        ],
        primary: "#ff0000",
        secondary: "#330000",
        background: "#ffe6e6",
        text: "#330000"
    },
    orange: {
        title: "Laranja",
        description: "O laranja é a cor da criatividade, do entusiasmo e da transformação. Está ligado ao chakra sacral, que governa a expressão criativa e a energia sexual. Use o laranja para estimular a criatividade e trazer alegria à sua vida.",
        tips: [
            "Use laranja em espaços de trabalho ou estudo para estimular a criatividade.",
            "Incorpore flores laranjas, como calêndulas, em rituais de abundância.",
            "Medite com cristais como âmbar ou cornalina para ativar o chakra sacral."
        ],
        primary: "#ff6600",
        secondary: "#331a00",
        background: "#fff0e6",
        text: "#331a00"
    },
    yellow: {
        title: "Amarelo",
        description: "O amarelo é a cor do otimismo, da clareza mental e da alegria. Está associado ao chakra do plexo solar, que governa a autoestima e o poder pessoal. Use o amarelo para iluminar seu dia e atrair boas energias.",
        tips: [
            "Use amarelo em acessórios ou decorações para elevar seu humor.",
            "Adicione velas amarelas em rituais de prosperidade e sucesso.",
            "Medite com citrino ou olho de tigre para fortalecer o chakra do plexo solar."
        ],
        primary: "#ffff00",
        secondary: "#333300",
        background: "#ffffe6",
        text: "#333300"
    },
    green: {
        title: "Verde",
        description: "O verde é a cor do equilíbrio, da cura e do crescimento. Está ligado ao chakra cardíaco, que governa o amor e a compaixão. Use o verde para trazer harmonia e renovação à sua vida.",
        tips: [
            "Use plantas verdes em casa para purificar o ar e a energia do ambiente.",
            "Incorpore cristais como esmeralda ou aventurina em rituais de cura emocional.",
            "Medite com o verde para abrir e equilibrar o chakra cardíaco."
        ],
        primary: "#00ff00",
        secondary: "#003300",
        background: "#e6ffe6",
        text: "#003300"
    },
    blue: {
        title: "Azul",
        description: "O azul é a cor da calma, da paz e da intuição. Está associado ao chakra da garganta, que governa a comunicação e a expressão. Use o azul para acalmar a mente e promover a serenidade.",
        tips: [
            "Use azul em quartos ou espaços de meditação para promover tranquilidade.",
            "Adicione velas azuis em rituais de purificação e proteção.",
            "Medite com lápis-lazúli ou sodalita para fortalecer a intuição."
        ],
        primary: "#0000ff",
        secondary: "#000033",
        background: "#e6e6ff",
        text: "#000033"
    },
    indigo: {
        title: "Índigo",
        description: "O índigo é a cor da intuição, da sabedoria e da percepção espiritual. Está ligado ao chakra do terceiro olho, que governa a visão interior e a conexão com o divino. Use o índigo para aprofundar sua intuição e conexão espiritual.",
        tips: [
            "Use velas índigo em rituais de meditação e expansão da consciência.",
            "Incorpore cristais como ametista ou azurita para ativar o terceiro olho.",
            "Medite com o índigo para fortalecer sua intuição e percepção."
        ],
        primary: "#4b0082",
        secondary: "#1a0033",
        background: "#e6e6f2",
        text: "#1a0033"
    },
    purple: {
        title: "Roxo",
        description: "O roxo é a cor da espiritualidade, da sabedoria e da transformação. Está associado ao chakra coronário, que governa a conexão com o universo. Use o roxo para elevar sua espiritualidade e alcançar a paz interior.",
        tips: [
            "Use velas roxas em rituais de meditação e conexão espiritual.",
            "Incorpore cristais como ametista ou fluorita para amplificar a energia espiritual.",
            "Medite com o roxo para abrir e ativar o chakra coronário."
        ],
        primary: "#800080",
        secondary: "#1a001a",
        background: "#f2e6ff",
        text: "#1a001a"
    },
    pink: {
        title: "Rosa",
        description: "O rosa é a cor do amor, da compaixão e da harmonia emocional. Está ligado ao chakra cardíaco e representa o amor incondicional. Use o rosa para atrair amor próprio e cura emocional.",
        tips: [
            "Use roupas rosas para promover sentimentos de amor e aceitação.",
            "Adicione flores rosas, como rosas ou lírios, em rituais de amor.",
            "Medite com quartzo rosa para abrir o chakra cardíaco e atrair amor."
        ],
        primary: "#ff66b3",
        secondary: "#33001a",
        background: "#ffe6f2",
        text: "#33001a"
    },
    white: {
        title: "Branco",
        description: "O branco é a cor da pureza, da clareza e da paz. Representa a luz divina e a proteção espiritual. Use o branco para limpar energias negativas e trazer luz à sua vida.",
        tips: [
            "Use velas brancas em rituais de purificação e proteção.",
            "Incorpore cristais como quartzo claro ou selenita para amplificar a energia do branco.",
            "Medite com o branco para limpar e equilibrar todos os chakras."
        ],
        primary: "#ffffff",
        secondary: "#000000",
        background: "#f0f0f0",
        text: "#000000"
    },
    black: {
        title: "Preto",
        description: "O preto é a cor da proteção, do mistério e da introspecção. Representa a absorção de energias negativas e a conexão com o desconhecido. Use o preto para se proteger energeticamente e aprofundar a introspecção.",
        tips: [
            "Use roupas pretas em dias em que precisar de proteção energética.",
            "Adicione cristais como ônix ou turmalina negra em rituais de proteção.",
            "Medite com o preto para se conectar com seu eu interior e liberar medos."
        ],
        primary: "#000000",
        secondary: "#ffffff",
        background: "#1a1a1a",
        text: "#ffffff"
    },
    gold: {
        title: "Dourado",
        description: "O dourado é a cor da abundância, da sabedoria divina e da iluminação. Representa a conexão com o divino e a prosperidade espiritual. Use o dourado para atrair riqueza e sabedoria.",
        tips: [
            "Use velas douradas em rituais de abundância e prosperidade.",
            "Incorpore cristais como pirita ou ouro em rituais de atração de riqueza.",
            "Medite com o dourado para se conectar com a sabedoria divina."
        ],
        primary: "linear-gradient(to right, #474741, #fae902);",
        secondary: "#332600",
        background: "#fff9e6",
        text: "#332600"
    },
    silver: {
        title: "Prateado",
        description: "O prateado é a cor da intuição, da proteção e da conexão com a lua. Representa a energia feminina e a clareza emocional. Use o prateado para fortalecer a intuição e a proteção espiritual.",
        tips: [
            "Use velas prateadas em rituais de intuição e proteção.",
            "Incorpore cristais como hematita ou pedra da lua em rituais de conexão lunar.",
            "Medite com o prateado para fortalecer a intuição e a clareza emocional."
        ],
        primary: "#linear-gradient(to right, #c0c0c0, #000000);",
        secondary: "#333333",
        background: "linear-gradient(to right, #c0c0c0, #000000);",
        text: "#333333"
    },
    turquoise: {
        title: "Turquesa",
        description: "O turquesa é a cor da cura, da comunicação e da proteção espiritual. Está associado ao chakra da garganta e ao chakra cardíaco. Use o turquesa para promover a cura emocional e a comunicação clara.",
        tips: [
            "Use turquesa em acessórios ou decorações para promover a cura.",
            "Incorpore cristais como turquesa ou água-marinha em rituais de comunicação.",
            "Medite com o turquesa para equilibrar a comunicação e o amor."
        ],
        primary: "#40e0d0",
        secondary: "#003333",
        background: "#e6f2f2",
        text: "#003333"
    },
    brown: {
        title: "Marrom",
        description: "O marrom é a cor da estabilidade, da conexão com a terra e da segurança. Representa a energia da mãe terra e a estabilidade emocional. Use o marrom para se conectar com a natureza e trazer estabilidade à sua vida.",
        tips: [
            "Use marrom em decorações para criar um ambiente acolhedor e estável.",
            "Incorpore cristais como jaspe marrom ou obsidiana em rituais de enraizamento.",
            "Medite com o marrom para se conectar com a energia da terra."
        ],
        primary: "#a52a2a",
        secondary: "#331a1a",
        background: "#f2e6e6",
        text: "#331a1a"
    },
    gray: {
        title: "Cinza",
        description: "O cinza é a cor da neutralidade, do equilíbrio e da proteção. Representa a transição entre o claro e o escuro, o equilíbrio entre opostos. Use o cinza para trazer equilíbrio e proteção à sua vida.",
        tips: [
            "Use cinza em rituais de equilíbrio e neutralidade.",
            "Incorpore cristais como quartzo fumê ou hematita em rituais de proteção.",
            "Medite com o cinza para encontrar equilíbrio emocional."
        ],
        primary: "#808080",
        secondary: "#333333",
        background: "#e6e6e6",
        text: "#333333"
    },
    magenta: {
        title: "Magenta",
        description: "O magenta é a cor da transformação, da espiritualidade e da criatividade. Representa a energia do chakra coronário e a conexão com o divino. Use o magenta para promover a transformação espiritual e a criatividade.",
        tips: [
            "Use magenta em rituais de transformação e conexão espiritual.",
            "Incorpore cristais como rodocrosita ou rubi em rituais de criatividade.",
            "Medite com o magenta para ativar o chakra coronário e a criatividade."
        ],
        primary: "#ff00ff",
        secondary: "#330033",
        background: "#ffe6ff",
        text: "#330033"
    }
};

const colorTitle = document.getElementById("color-title");
const colorDescription = document.getElementById("color-description");
const colorTips = document.getElementById("color-tips");
const colorInfoSection = document.querySelector(".color-info");

document.querySelectorAll(".color-selector button").forEach(button => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("data-color");
        const data = colorData[color];

        // Atualiza o conteúdo
        colorTitle.textContent = data.title;
        colorDescription.textContent = data.description;
        colorTips.innerHTML = data.tips.map(tip => `<li>${tip}</li>`).join("");

        // Mostra a seção de informações
        colorInfoSection.classList.remove("hidden");

        // Muda as cores da página
        document.documentElement.style.setProperty("--primary", data.primary);
        document.documentElement.style.setProperty("--secondary", data.secondary);
        document.documentElement.style.setProperty("--background", data.background);
        document.documentElement.style.setProperty("--text", data.text);
    });
});