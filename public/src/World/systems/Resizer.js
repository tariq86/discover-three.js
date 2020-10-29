class Resizer {
    constructor(container, camera, renderer) {
        // Call `setSize` on init to set up the initial camera/viewport
        this.setSize(container, camera, renderer);
        // Call `setSize` whenever the window's size is changed
        window.addEventListener('resize', () => {
            this.setSize(container, camera, renderer);
        });
    }

    setSize(container, camera, renderer) {
        // Set the camera's aspect ratio
        camera.aspect = container.clientWidth / container.clientHeight;
        // Update the camera's frustum
        camera.updateProjectionMatrix();
        // update the size of the renderer AND the canvas
        renderer.setSize(container.clientWidth, container.clientHeight);
        // set the pixel ratio (for mobile devices)
        renderer.setPixelRatio(window.devicePixelRatio);
    }
}

export { Resizer };