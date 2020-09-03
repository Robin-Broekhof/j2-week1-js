var value1 = 200
var valuepx = "px"
var directionArray = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"] 

for (i = 0; i < 10; i++){
    value1++
}
var NI = 0
var NEI = 0
var EI = 0
var SEI = 0
var SI = 0
var SWI = 0
var WI = 0
var NWI = 0


var value_true = value1 + valuepx


function gameStart(){
    setTimeout(function(){ 

        var direction = directionArray[Math.floor(Math.random() * directionArray.length)]
        alert(direction)
        console.log(direction)

        if(direction == "N"){
            alert("Yeahh n")
            for (i = 0; i < 100; i++){
                NI++
            }
            var NIV = NI + valuepx
            console.log(NIV)
            document.getElementById("game-duck-gif").style.bottom = NIV
            gameStart()
        }
        else if(direction == "NE"){
            alert("Yeahh ne")
            for (i = 0; i < 100; i++){
                NEI++
            }
            var NEIV = NIE + valuepx
            console.log(NIEV)
            document.getElementById("game-duck-gif").style.bottom = NEIV
            document.getElementById("game-duck-gif").style.left = NEIV
            gameStart()
        }




        else if(direction == "E"){
            alert("Yeahh e")
            for (i = 0; i < 100; i++){
                SI++
            }
            var SIV = SI + valuepx
            console.log(SIV)
            document.getElementById("game-duck-gif").style.left = SIV
            gameStart()
        }
        else if(direction == "SE"){
            alert("Yeahh se")
            for (i = 0; i < 100; i++){
                SEI++
            }
            var SEIV = SEI + valuepx
            console.log(SIEV)
            document.getElementById("game-duck-gif").style.left = SIEV
            document.getElementById("game-duck-gif").style.top = SIEV
            gameStart()
        }



        else if(direction == "S"){
            alert("Yeahh s")
            for (i = 0; i < 100; i++){
                SI++
            }
            var SIV = SI + valuepx
            console.log(SIV)
            document.getElementById("game-duck-gif").style.top = SIV
            gameStart()
        }
        else if(direction == "SW"){
            alert("Yeahh sw")
            for (i = 0; i < 100; i++){
                SWI++
            }
            var SWIV = SWI + valuepx
            console.log(SWEV)
            document.getElementById("game-duck-gif").style.top = SWEV
            document.getElementById("game-duck-gif").style.right = SWEV
            gameStart()
        }



        else if(direction == "W"){
            alert("Yeahh w")
            for (i = 0; i < 100; i++){
                WI++
            }
            var WIV = WI + valuepx
            console.log(WIV)
            document.getElementById("game-duck-gif").style.right = WIV
            gameStart()
        }
        else if(direction == "NW"){
            alert("Yeahh nw")
            for (i = 0; i < 100; i++){
                NWI++
            }
            var NWIV = NWI + valuepx
            console.log(NWIV)
            document.getElementById("game-duck-gif").style.right = NWIV
            document.getElementById("game-duck-gif").style.bottom = NWIV
            gameStart()
        }


        
        




        
    
    
    }, 500);

    


}


gameStart()











