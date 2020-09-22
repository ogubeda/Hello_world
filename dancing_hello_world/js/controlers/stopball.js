// import {start} from "../main.js";

function stopBall(state, app) {
    let myApp = app;
    let stateApp = state;
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            if (stateApp=="run"){
                stateApp="stop";
                clearInterval(myApp);
            }else{            
                stateApp = 'run';
                myApp = setInterval(dw, 50);
            }// end_else
        }
    }
}
