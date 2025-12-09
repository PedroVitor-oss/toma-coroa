// 1. Configuração do Canvas
const canvas = document.getElementById('canvas');
//trocar tamanho do canvas paara o tamanho da tela do dispositivo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Obtém o contexto 2D necessário para desenhar
const ctx = canvas.getContext('2d');

// 2. Variáveis de estado do objeto (o círculo)
let x = 50;         // Posição inicial X
let y = 50;         // Posição inicial Y
const raio = 20;    // Raio do círculo
let dx = 2;         // Velocidade e direção X (a quantidade que X muda por frame)
let dy = 2;         // Velocidade e direção Y (a quantidade que Y muda por frame)
const cor = 'red';  // Cor do círculo

// 3. Função para desenhar o círculo
function desenharCirculo() {
    ctx.beginPath(); // Inicia um novo caminho
    // Desenha o arco: (x, y, raio, anguloInicial, anguloFinal)
    ctx.arc(x, y, raio, 0, Math.PI * 2); 
    ctx.fillStyle = cor; // Define a cor de preenchimento
    ctx.fill();          // Preenche o círculo
    ctx.closePath();     // Fecha o caminho
}

// 4. Função principal de atualização/animação
function atualizar() {
    // --- Etapa 1: Limpar o Canvas ---
    // Essencial para remover o desenho anterior
    // Argumentos: (xInicial, yInicial, largura, altura)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // --- Etapa 2: Desenhar o objeto na nova posição ---
    desenharCirculo();

    // --- Etapa 3: Mudar a posição para o próximo frame ---
    x += dx;
    y += dy;

    // --- Etapa 4: Adicionar lógica de "colisão" (inverter a direção ao atingir as bordas) ---
    // Colisão com a borda direita ou esquerda
    if (x + raio > canvas.width || x - raio < 0) {
        dx = -dx; // Inverte a direção X
    }

    // Colisão com a borda inferior ou superior
    if (y + raio > canvas.height || y - raio < 0) {
        dy = -dy; // Inverte a direção Y
    }
}

// 5. Iniciar o loop de animação
// Executa a função 'atualizar' a cada 30 milissegundos (aproximadamente 33 frames por segundo)
setInterval(atualizar, 30);