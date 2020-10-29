import { ConeBufferGeometry, Mesh, MeshStandardMaterial } from 'https://unpkg.com/three@0.121.1/build/three.module.js';

class Cone {
    constructor(radius = 0.5, height = 1.5, radialSegments = 20, meshProps = { color: 0xffffff }) {
        // create a geometry
        this.geometry = new ConeBufferGeometry(radius, height, radialSegments);

        // create a standard mesh material
        this.material = new MeshStandardMaterial(meshProps);

        // create a Mesh containing the geometry and material
        this.mesh = new Mesh(this.geometry, this.material);
        this.growing = true;
    }

    setPosition(x, y, z) {
        this.mesh.position.set(x, y, z);
    }

    tick(delta) {
        let newScale = 1;
        const xScale = this.mesh.scale.x;
        if (parseInt(xScale) === 2) {
            this.growing = false;
        } else if (xScale <= 1) {
            this.growing = true;
        }
        newScale = this.growing ? xScale + 0.025 : xScale - 0.025;
        this.mesh.scale.x = newScale;
        this.mesh.scale.y = newScale;
        this.mesh.scale.z = newScale;
    }
}

export { Cone };