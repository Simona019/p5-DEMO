const cellSize = 50;
const directionInitial = 'r';

const snakeHead = {
    direction: null,
    image: null,
    positionX: null,
    positionY: null,
    sizeX: cellSize,
    sizeY: cellSize 
};

const food = {
    image: null,
    positionX: null,
    positionY: null,
    sizeX: cellSize,
    sizeY: cellSize 
};



function drawHead() {
    angleMode(DEGREES);
    push();
    translate(snakeHead.positionX, snakeHead.positionY);
    
    if (snakeHead.direction === 'r') {
        rotate(-90);
    } else if (snakeHead.direction === 'l') {
        rotate(90);    
    } else if (snakeHead.direction === 'u') {
        rotate(180);   
    }
    imageMode(CENTER);
    
    image(
        snakeHead.image,
        0,
        0,
        snakeHead.sizeX,
        snakeHead.sizeY,
        
    );
    pop();
    angleMode(RADIANS);
 }
function drawGrid() {
    for (var x = 0; x < canvasX; x = x + cellSize) {
        line(x, 0, x, canvasY);

    }

    for (var y = 0; y < canvasY; y = y + cellSize) {
        line(0, y, canvasX, y);

    }
}


function drawSnake() {
    drawGrid();
    image(
        food.image,
        cellSize * food.positionX,
        cellSize * food.positionY,
        food.sizeX,
        food.sizeY,
        
    );



    if (snakeHead.direction === 'r') {
        snakeHead.positionX += cellSize;
    } else if (snakeHead.direction === 'l') {
        snakeHead.positionX -= cellSize;    
    } else if (snakeHead.direction === 'u') {
        snakeHead.positionY -= cellSize;    
    } else if (snakeHead.direction === 'd') {
        snakeHead.positionY += cellSize;    
    }

    drawHead();
}


function keyPressedSnake() {
    if(key === 'a' && snakeHead.direction !== 'r') {
        snakeHead.direction = 'l'
    } else if(key === 'd' && snakeHead.direction !== 'l') {
        snakeHead.direction = 'r'
    } else if(key === 'w' && snakeHead.direction !== 'd') {
        snakeHead.direction = 'u'
    } else if(key === 's' && snakeHead.direction !== 'u') {
        snakeHead.direction = 'd'
    }
}

function getRandomFoodPosition() {
    const countCellX = canvasX / cellSize;
    const countCellY = canvasY / cellSize;

    return {
        x: Math.floor(Math.random() * countCellX) + 1,
        y: Math.floor(Math.random() * countCellY) + 1,
    }
    Math.floor(Math)
}


function setupSnake() {
    food.image = loadImage('assets/food.png');
    food.positionX = getRandomFoodPosition().x;
    food.positionY = getRandomFoodPosition().y;

    snakeHead.image = loadImage('assets/snakeHead.png');
    snakeHead.direction = directionInitial
    snakeHead.positionX = cellSize * 2 + cellSize / 2;
    snakeHead.positionY = cellSize * 2 + cellSize / 2;
    
}
