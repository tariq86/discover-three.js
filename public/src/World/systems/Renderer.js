import { WebGLRenderer } from 'https://unpkg.com/three@0.121.1/build/three.module.js';

class Renderer {
    constructor() {
        this.renderer = new WebGLRenderer({ antialias: true });
        // Enable "physically correct lighting" model
        this.renderer.physicallyCorrectLights = true;
    }
}

export { Renderer };