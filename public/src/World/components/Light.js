import { DirectionalLight } from 'https://unpkg.com/three@0.121.1/build/three.module.js';

class Light {
    constructor(color = 'white', intensity = 8, position = { x: 10, y: 10, z: 10 }) {
        this.startingPosition = position;
        this.light = new DirectionalLight(color, intensity);
        this.setPosition(position.x, position.y, position.z);
        this.movingLeft = false;
    }

    setPosition(x, y, z) {
        this.light.position.set(x, y, z);
    }

    tick(delta) {
        const maxX = this.startingPosition.x * 10;
        const newX = this.movingLeft ? this.light.position.x - (10 * delta) : this.light.position.x + (10 * delta);
        const newY = this.movingLeft ? this.light.position.y - (10 * delta) : this.light.position.y + (10 * delta);
        const newZ = this.movingLeft ? this.light.position.z - (10 * delta) : this.light.position.z + (10 * delta);
        if (newX >= maxX) {
            this.movingLeft = true;
        } else if (newX <= this.startingPosition.x) {
            this.movingLeft = false;
        }
        // this.light.position.x = newX;
        this.setPosition(newX, newY, newZ);
    }
}

export { Light };