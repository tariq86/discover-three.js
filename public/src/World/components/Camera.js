import { PerspectiveCamera } from 'https://unpkg.com/three@0.121.1/build/three.module.js';

class Camera {
    constructor(fov = 35, aspectRatio = 1, nearClippingPlane = 0.1, farClippingPlane = 100) {
        this.camera = new PerspectiveCamera(
            fov, // fov = Field Of View
            aspectRatio, // aspect ratio (dummy value)
            nearClippingPlane, // near clipping plane
            farClippingPlane, // far clipping plane
        );
        this.camera.position.set(0, 0, 10);
        this.zoomingIn = false;
    }
    tick(delta) {
        let currZoom = this.camera.position.z;
        if (currZoom >= 20) {
            this.zoomingIn = true;
        } else if (currZoom <= 10) {
            this.zoomingIn = false;
        }
        let newZoom = this.zoomingIn ? currZoom - 0.1 : currZoom + 0.1;
        this.camera.position.z = newZoom;
    }
}

export { Camera };