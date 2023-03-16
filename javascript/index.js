// Copyright (C) 2023 Micaella Langit
import Game from './Game.js';

const GAME = new Game();
let TIME = 0;

document.addEventListener('DOMContentLoaded', event => {

    run();

})

function run() 
{
    GAME.run(TIME);
    TIME++;
    setTimeout( run , 60 );
    if(TIME >= 60){
        TIME = 0;
    }
}