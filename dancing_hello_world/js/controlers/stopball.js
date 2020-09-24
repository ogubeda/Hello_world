
function stopBall(state, func) {
    let values = {state: state, func: func};
    let myApp = setInterval(values.func, 50);
    let stateApp = values.state;

    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            if (stateApp=="run"){
                stateApp="stop";
                clearInterval(myApp);
            }else{            
                stateApp = 'run';
                myApp = setInterval(values.func, 50);
            }// end_else
        }
    }
}

export {stopBall};
