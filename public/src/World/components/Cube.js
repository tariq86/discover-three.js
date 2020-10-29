import {
    BoxBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader
} from 'https://unpkg.com/three@0.121.1/build/three.module.js';

const radiansPerSecond = MathUtils.degToRad(30);

class Cube {
    constructor(width = 1, height = 1, depth = 1, materialParameters = { color: 'purple' }) {
        // create a geometry
        this.geometry = new BoxBufferGeometry(width, height, depth);

        // create a default (white) standard material
        this.material = new MeshStandardMaterial(materialParameters);

        // create a Mesh containing the geometry and material
        this.mesh = new Mesh(this.geometry, this.material);
    }

    setRotation(x = -0.5, y = -0.1, z = 0.8) {
        this.mesh.rotation.set(x, y, z);
    }

    setPosition(x, y, z) {
        this.mesh.position.set(x, y, z);
    }

    tick(delta) {
        this.mesh.rotation.x += radiansPerSecond * delta;
        this.mesh.rotation.y += radiansPerSecond * delta;
        this.mesh.rotation.z += radiansPerSecond * delta;
    }
}

export { Cube };