import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//---------------------------------------MOUSE INTERACTION BACKEND-------------------------------------------------------//

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2()
document.addEventListener('mousemove', onDocumentMouseMove, false);
window.addEventListener('resize', onWindowResize, false);
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function manageRaycasterIntersections(scene, camera) {
    camera.updateMatrixWorld();
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {

    } 
    else {
        
    }
}

//------------------------------------------HTML MANIPULATION----------------------------------------------------//

const canvas = document.querySelector('canvas');

const name = document.getElementById('name');
name.style.top = `50px`;
name.style.left = `100px`;

const home = document.getElementById('home');
home.style.top = '50px';
home.style.right = `400px`;

const about = document.getElementById('about');
about.style.top = '50px';
about.style.right = `250px`;

const projects = document.getElementById('projects');
projects.style.top = `50px`;
projects.style.right = `100px`;

const secretMessage = document.getElementById('secretMessage');
secretMessage.style.top = '67px';
secretMessage.style.left = '600px';

//----------------------------------------------3D BUSINESS------------------------------------------------//

var model;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

const light = new THREE.DirectionalLight(0x404040, 100);
scene.add( light );

const passatLoader = new GLTFLoader();

passatLoader.load( 'passat.glb', function ( gltf ) {

    gltf.scene.position.y = -1;
    gltf.scene.scale.set(1, 1, 1);
    model = gltf.scene;
	scene.add( model );

}, undefined, function ( error ) {

	console.error( error );

} );

//--------------------------------------------ANIMATE--------------------------------------------------//

function animate() {
	requestAnimationFrame( animate );

    if (model) {

        model.rotation.y = mouse.x;
        model.rotation.x = -mouse.y;
        //model.position.x = mouse.x;
        //model.position.y = -mouse.y - 0.5;
        
       //model.rotation.y = mouse.x;
    }
	renderer.render( scene, camera );
}
animate();

//---------------------------------------------MOUSE EVENTS-------------------------------------------------//

function onMouseDown(event){
   
}

function onMouseUp(event){
    
}