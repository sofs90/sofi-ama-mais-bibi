// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função que muda a cor do texto e da borda ao ser clicado
function changeTextAndBorderColor() {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.addEventListener('click', function() {
        const newColor = getRandomColor();
        loveMessage.style.color = newColor;          // Muda a cor do texto
        loveMessage.style.borderBottomColor = newColor;  // Muda a cor da borda inferior
    });
}

// Chama a função ao carregar a página
window.onload = changeTextAndBorderColor;
