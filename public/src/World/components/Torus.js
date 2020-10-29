import {
    TorusBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader
} from 'https://unpkg.com/three@0.121.1/build/three.module.js';

const radiansPerSecond = MathUtils.degToRad(30);

class Torus {
    constructor(radius = 1, tube = 0.4, radialSegments = 8, tubularSegments = 6, texture = 'uv-test-bw.png') {
        // create a geometry
        this.geometry = new TorusBufferGeometry(radius, tube, radialSegments, tubularSegments);

        // set the mesh material
        this.setTexture(texture);

        // create a Mesh containing the geometry and material
        this.mesh = new Mesh(this.geometry, this.material);
    }

    setTexture(imageName) {
        const textureLoader = new TextureLoader();
        const texture = textureLoader.load(`/assets/textures/${imageName}`);
        console.log('texture: ', texture);
        this.material = new MeshStandardMaterial({ map: texture });
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

export { Torus };