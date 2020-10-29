import {
    Color as ThreeColor,
    Scene as ThreeScene
} from 'https://unpkg.com/three@0.121.1/build/three.module.js';

class Scene {
    constructor(color = 'skyblue') {
        console.debug('Scene->constructor()');
        this.scene = new ThreeScene();
        this.scene.background = new ThreeColor(color);
    }
}

export { Scene };