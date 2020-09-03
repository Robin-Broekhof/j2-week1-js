var value1 = 200
var valuepx = "px"
var directionArray = ["North", "East", "South", "West"] 

for (i = 0; i < 10; i++){
    value1++
}


var value_true = value1 + valuepx


function gameStart(){
    setTimeout(function(){ 
        alert(direction)

        if(direction == "North"){
            alert("Yeahh north")
            document.getElementById("game-duck-gif").style.top = "100px"
        }
        if(direction == "East"){
            alert("Yeahh east")
            document.getElementById("game-duck-gif").style.right = "100px"
        }
        if(direction == "West"){
            alert("Yeahh west")
            document.getElementById("game-duck-gif").style.left = "100px"
        }
        if(direction == "South"){
            alert("Yeahh south")
            document.getElementById("game-duck-gif").style.bottom = "100px"
        }
        
        
    
    
    }, 1500);

    


}

var direction = directionArray[Math.floor(Math.random() * directionArray.length)]

gameStart()











