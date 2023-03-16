// Copyright (C) 2023 Micaella Langit

//IMPORT ITEMS

//VARIABLES
const NOT_STARTED = 0;
const IN_PROGRESS = 1;
const GAME_OVER = 2;

export default class Game{
    constructor(){
        this.gameState = NOT_STARTED;
        this.initHandlers();
    }

    initHandlers(){

        //Play Now - hide the play now section and show the game section
        document.querySelector("#start-game-btn").addEventListener("click", event => {
            this.gameState = IN_PROGRESS;
            this.showScreen();
        });

        document.querySelector("#end-game-btn").addEventListener("click", event => {
            this.gameState = NOT_STARTED;
            this.showScreen();
        });
    }

    showScreen(){

        switch(this.gameState){

            case IN_PROGRESS:
                //hide the splash + show the game
                document.querySelector("#splash-screen").classList.add("hide");
                document.querySelector("#game-screen").classList.remove("hide");
                break;
            case NOT_STARTED:
                //show the splash + hide the game
                document.querySelector("#splash-screen").classList.remove("hide");
                document.querySelector("#game-screen").classList.add("hide");
                break;
            case OVER:
                //show the splash + hide the game
                document.querySelector("#splash-screen").classList.remove("hide");
                document.querySelector("#game-screen").classList.add("hide");
                break;
            default:
                break;
        }
    }
}