
var valuepx = "px"
var directionArray = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"] 

var NI = 0
var NEI = 0
var EI = 0
var SEI = 0
var SI = 0
var SWI = 0
var WI = 0
var NWI = 0

document.getElementById("game-duck-gif").style.top = "260px"


function gameStart(){
    setTimeout(function(){ 

        var direction = directionArray[Math.floor(Math.random() * directionArray.length)]
        console.log(direction)


        if(direction == "N"){
            for (i = 0; i < 100; i++){
                NI++
            }
            var NIV = NI + valuepx
            console.log(NIV)
            document.getElementById("game-duck-gif").style.bottom = NIV
            gameStart()
        }
        else if(direction == "NE"){
            for (i = 0; i < 100; i++){
                NEI++
            }
            var NEIV = NEI + valuepx
            console.log(NEIV)
            document.getElementById("game-duck-gif").style.bottom = NEIV
            document.getElementById("game-duck-gif").style.left = NEIV
            gameStart()
        }




        else if(direction == "E"){
            for (i = 0; i < 100; i++){
                SI++
            }
            var SIV = SI + valuepx
            console.log(SIV)
            document.getElementById("game-duck-gif").style.left = SIV
            gameStart()
        }
        else if(direction == "SE"){
            for (i = 0; i < 100; i++){
                SEI++
            }
            var SEIV = SEI + valuepx
            console.log(SEIV)
            document.getElementById("game-duck-gif").style.left = SEIV
            document.getElementById("game-duck-gif").style.top = SEIV
            gameStart()
        }



        else if(direction == "S"){
            for (i = 0; i < 100; i++){
                SI++
            }
            var SIV = SI + valuepx
            console.log(SIV)
            document.getElementById("game-duck-gif").style.top = SIV
            gameStart()
        }
        else if(direction == "SW"){
            for (i = 0; i < 100; i++){
                SWI++
            }
            var SWIV = SWI + valuepx
            console.log(SWIV)
            document.getElementById("game-duck-gif").style.top = SWIV
            document.getElementById("game-duck-gif").style.right = SWIV
            gameStart()
        }



        else if(direction == "W"){
            for (i = 0; i < 100; i++){
                WI++
            }
            var WIV = WI + valuepx
            console.log(WIV)
            document.getElementById("game-duck-gif").style.right = WIV
            gameStart()
        }
        else if(direction == "NW"){
            for (i = 0; i < 100; i++){
                NWI++
            }
            var NWIV = NWI + valuepx
            console.log(NWIV)
            document.getElementById("game-duck-gif").style.right = NWIV
            document.getElementById("game-duck-gif").style.bottom = NWIV
            gameStart()
        }


        
        




        
    
    
    }, 1500);

    


}


gameStart()











