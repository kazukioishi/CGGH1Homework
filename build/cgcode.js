function init() {
    //get HTML element(div)
    let canvas = document.getElementById('canvas-area');
    //make scene
    let scene = new THREE.Scene();
    //initialize renderer
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(0xffffff), 1);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    canvas.appendChild(renderer.domElement);
    //initialize camera
    let camera = new THREE.PerspectiveCamera(60, (canvas.clientWidth / canvas.clientHeight), 1, 1000);
    camera.position.set(5, 20, 30);
    let trackball = new THREE.TrackballControls(camera);
    trackball.rotateSpeed = 15;
    //initialize light
    let directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 150, 1000);
    scene.add(directionalLight);
    //load swoard
    let loader = new THREE.JSONLoader();
    loader.load('./yasusada3.json', (geometry, materials) => {
        let mat = new THREE.MeshNormalMaterial();
        let faceMaterial = new THREE.MeshFaceMaterial(materials);
        let mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(10, 10, 10);
        scene.add(mesh);
    });
    //update screen
    let animate = () => {
        requestAnimationFrame(animate);
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.render(scene, camera);
        trackball.update();
    };
    animate();
}
/// <reference path="./init_three.ts"/>
$(() => init());
//# sourceMappingURL=cgcode.js.map