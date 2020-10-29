import { Camera } from './components/Camera.js';
import { Cone } from './components/Cone.js';
import { Cube } from './components/Cube.js';
import { createScene } from './components/scene.js';
import { Light } from './components/Light.js';

import { Renderer } from './systems/Renderer.js';
import { Loop } from './systems/Loop.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let renderer;
let scene;
let loop;

class World {
    constructor(container) {
        console.log('World->constructor()');
        camera = new Camera();
        renderer = new Renderer().renderer;
        scene = createScene();
        loop = new Loop(camera.camera, scene, renderer);
        // loop.updatables.push(camera);
        container.append(renderer.domElement);
        const light = new Light('hotpink', 8, { x: 5, y: 5, z: 5 });
        loop.updatables.push(light);
        const cube1 = new Cube(0.5, 0.5, 0.5, { color: 'white' });
        loop.updatables.push(cube1);
        cube1.setRotation();
        scene.add(cube1.mesh, light.light);
        const cube2 = new Cube(1, 1, 1);
        loop.updatables.push(cube2);
        cube2.setPosition(-1, -1, -1);
        cube2.setRotation(0.5, 0.1, 0.4);
        scene.add(cube2.mesh);
        const cone = new Cone();
        cone.setPosition(2, 1, 1);
        loop.updatables.push(cone);
        scene.add(cone.mesh);

        new Resizer(container, camera.camera, renderer);
    }

    render() {
        console.log('World->render()');
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World };