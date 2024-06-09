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

//------------------------------------------HTML MANIPULATION----------------------------------------------------//



//----------------------------------------------3D BUSINESS------------------------------------------------//

var model;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let video = document.getElementById("video");
let videoTexture = new THREE.VideoTexture(video);
videoTexture.minFilter = THREE.NearestFilter;
videoTexture.maxFilter = THREE.NearestFilter;

var videoMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture,
    side: THREE.FrontSide,
});

let videoGeometry = new THREE.PlaneGeometry(16, 9);

let videoScreen = new THREE.Mesh(videoGeometry, videoMaterial);

video.play();
scene.add(videoScreen);

camera.position.z = 5;

//--------------------------------------------ANIMATE--------------------------------------------------//

function animate() {
	requestAnimationFrame( animate );

    videoTexture.needsUpdate = true;

	renderer.render( scene, camera );
}
animate();

//---------------------------------------------MOUSE EVENTS-------------------------------------------------//

function onMouseDown(event){
   
}

function onMouseUp(event){
    
}