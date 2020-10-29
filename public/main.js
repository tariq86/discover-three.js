import { World } from './src/World/World.js';

function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // 1. Create an instance of the World app
    const world = new World(container);

    // 2. Render the scene
    // world.render();
    world.start();
}
// Start the scene + toggle the button visibility when "Start" button is clicked
document.querySelector('#start-scene').addEventListener('click', function (evt) {
    console.log('Starting the scene!');
    main();
    evt.target.style.display = 'none';
});