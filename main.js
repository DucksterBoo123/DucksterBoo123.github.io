import * as THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import { PI } from 'three/examples/jsm/nodes/Nodes.js';

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
        color : 0x000000
    }),
    new THREE.MeshBasicMaterial({
        color : 0x000000
    }),
    new THREE.MeshBasicMaterial({
        color : 0x000000
    }),
    new THREE.MeshBasicMaterial({
        color : 0x000000
    }),
    new THREE.MeshBasicMaterial({
        color : 0xFFFFFF
    }),
    new THREE.MeshBasicMaterial({
        color : 0x000000
    }),
]

const cube = new THREE.Mesh( geometry, texture );
scene.add( cube );

camera.position.z = 5;

//-------------------

var listTitle = document.getElementById("body2");
var topPercentListTitle = 105;
listTitle.style.top = "105%";

var list = document.getElementById("list");
var topPercentList = 113;
list.style.top = "113%";

var title = document.getElementById("body");
var topPercentTitle = 80;
title.style.top = "80%";

//-------------------

function animate() {
	requestAnimationFrame( animate );

    cube.position.y = 0.6;

    if(mouse.y < -0.5)
    {
        if(topPercentListTitle != 77)
        {
            topPercentListTitle -= 2;
            listTitle.style.top = topPercentListTitle + "%"; 
        }
        if(topPercentList != 85)
        {
            topPercentList -= 2;
            list.style.top = topPercentList + "%";   
        }
        if(topPercentTitle != 70)
        {
            topPercentTitle -= 1;
            title.style.top = topPercentTitle + "%";
        }
    }
    if(mouse.y > -0.5)
    {
        if(topPercentListTitle != 105)
        {
            topPercentListTitle += 2;
            listTitle.style.top = topPercentListTitle + "%"; 
        }
        if(topPercentList != 113)
        {
            topPercentList += 2;
            list.style.top = topPercentList + "%";   
        }
        if(topPercentTitle != 85)
        {
            topPercentTitle += 1;
            title.style.top = topPercentTitle + "%";
        }
    } 

	renderer.render( scene, camera );
}

animate();

//-------------------

//---------------------------------------------MOUSE EVENTS-------------------------------------------------//

function onMouseDown(event){
    
}

function onMouseUp(event){
    
}