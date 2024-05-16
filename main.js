import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Use of the Raycaster inspired by  webgl_interactive_cubes.html, in the THREE.js project examples directory
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

//----------------------------------------------------------------------------------------------//

var model;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;
/*
const gridX = new THREE.GridHelper(20, 100);
gridX.rotation.y = 1.571
gridX.position.y = -1
scene.add(gridX)

const gridYBack = new THREE.GridHelper(20, 100);
gridYBack.rotation.z = 1.571
gridYBack.rotation.y = 1.571
gridYBack.position.z = -10
gridYBack.position.y = 9
scene.add(gridYBack)

const gridYRight = new THREE.GridHelper(20, 100);
gridYRight.rotation.z = 1.571
gridYRight.position.y = 9
gridYRight.position.x = 10
scene.add(gridYRight)

const gridYLeft = new THREE.GridHelper(20, 100);
gridYLeft.rotation.z = 1.571
gridYLeft.position.y = 9
gridYLeft.position.x = -10
scene.add(gridYLeft)
*/
const light = new THREE.DirectionalLight(0x404040, 100);
scene.add( light );

const loader = new GLTFLoader();

loader.load( 'passat.glb', function ( gltf ) {

    gltf.scene.position.y = -1;
    gltf.scene.scale.set(1, 1, 1);
    model = gltf.scene;
	scene.add( model );

}, undefined, function ( error ) {

	console.error( error );

} );

function animate() {
	requestAnimationFrame( animate );

    if (model) {

        model.rotation.y = mouse.x;
        model.rotation.x = -mouse.y;
        model.position.x = mouse.x;
        model.position.y = -mouse.y - 0.5;
        
       //model.rotation.y = mouse.x;
    }
	renderer.render( scene, camera );
}
animate();

function onMouseDown(event){
   
}

function onMouseUp(event){
    
}