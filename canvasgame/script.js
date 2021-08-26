let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let keys = []

canvas.width = 800
canvas.height = 600

class Box {
    constructor(x, y, w, h, color) {
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.color = color
    }

    draw = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h, this.color)
    }

}
//Skapar objekt till spelet
player1 = new Box (10, 500, 60, 60, "cyan")
 block = new Box (200, 300, 60, 60, "red")
 ground = new Box (10, 550, 900, 50, "black")

//Skapar spelets loop
setInterval(gameLoop, 1)

window.addEventListener('keydown', function(e){
    keys[e.keyCode] = true
    })

window.addEventListener('keyup', function(e){
        delete keys[e.keyCode] 
        })

function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw()
    block.draw()
    ground.draw()
    checkWalls()
    move()
    
}

function move(){
    if(keys[87]){
        player1.y -= 2
    }

    if(keys[68]){
        player1.x += 2
    }

    if(keys[83]){
        player1.y += 2
    }

    if(keys[65]){
        player1.x -= 2
    }

    
}

function checkWalls(){
    
    if(player1.x < 0){
        player1.x += 2
        
    }

    if(player1.x + player1.w > canvas.width){
        player1.x -= 2
    }

    


    
}


function draw(){
    
}

