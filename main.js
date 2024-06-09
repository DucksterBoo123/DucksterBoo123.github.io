import * as THREE from 'three';

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

//-------------------

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const textureLoader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const texture = [
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/1.jpg"),
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/kartGoing.png"),
    }),
    new THREE.MeshBasicMaterial({
        color : 0x000000
    }),
    new THREE.MeshBasicMaterial({
        color : 0x000000
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/3.png"),
    }),
    new THREE.MeshBasicMaterial({
        color : 0x000000
    }),
]

const cube = new THREE.Mesh( geometry, texture );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

    cube.position.y = 0.6;

    if(mouse.y <= 0.6 && mouse.y >= -0.26)
    {
        cube.rotation.y = mouse.x;
        cube.position.x = mouse.x;
    }
    
    if(cube.rotation.y != 0)
    {
        if(cube.rotation.y > 0.03)
        {
            cube.rotation.y -= 0.05;
        }
        else if(cube.rotation.y < -0.03)
        {
            cube.rotation.y += 0.05;
        }
    }
    else if(cube.rotation.y = 0)
    {
        cube.rotation.y = 0;
    }
    
    if(cube.position.x != 0)
    {
        if(cube.position.x > 0.03)
        {
            cube.position.x -= 0.05;
        }
        else if(cube.position.x < -0.03)
        {
            cube.position.x += 0.05;
        }
    }
    else if(cube.position.x = 0)
    {
        cube.position.x = 0;
    }

	renderer.render( scene, camera );
}

animate();

//---------------------------------------------MOUSE EVENTS-------------------------------------------------//

function onMouseDown(event){
   
}

function onMouseUp(event){
    
}