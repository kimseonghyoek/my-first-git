import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene();
const loader = new GLTFLoader();

let camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(0,0,120);
scene.background = new THREE.Color("gray")

let light = new THREE.DirectionalLight(0xffffff,10); //조명 
scene.add(light);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#canvas")
});

loader.load('./react_logo/scene.gltf', function ( gltf ) {
	scene.add( gltf.scene );

  function animate() {
    requestAnimationFrame(animate)
    gltf.scene.rotation.y += 0.01;
    gltf.scene.rotation.x += 0.01;
    gltf.scene.rotation.z += 0.01;
    renderer.render(scene, camera);
  }

  animate()
}, undefined, function ( error ) {
	console.error( error );
} );


