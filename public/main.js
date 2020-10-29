import { World } from './src/World/World.js';

let world;
function createWorld() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // 1. Create an instance of the World app (if it doesn't exist yet)
    if (!world) {
        world = new World(container);
    }

    // 2. Render the scene
    // world.render();
    world.start();
}
// Start the scene + toggle the button visibility when "Start" button is clicked
const startBtn = document.querySelector('#start-scene');
const stopBtn = document.querySelector('#stop-scene');
startBtn.addEventListener('click', function (evt) {
    console.log('Starting the scene!');
    createWorld();
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
});

stopBtn.addEventListener('click', function (evt) {
    console.log('Pausing the scene!');
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
    if (world) {
        world.stop();
    }
});