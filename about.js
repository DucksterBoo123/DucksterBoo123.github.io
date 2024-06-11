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

addEventListener("wheel", wheelFunction);

//----------------------------------------------3D BUSINESS------------------------------------------------//

var model;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let carVideo = document.getElementById("carVideo");
let carVideoTexture = new THREE.VideoTexture(carVideo);
carVideoTexture.colorSpace = THREE.SRGBColorSpace;
carVideoTexture.magFilter = THREE.LinearFilter;
carVideoTexture.minFilter = THREE.LinearFilter;
var carVideoMaterial = new THREE.MeshBasicMaterial({
    map: carVideoTexture,
    side: THREE.FrontSide,
});
let carVideoGeometry = new THREE.PlaneGeometry(16, 9);
let carVideoScreen = new THREE.Mesh(carVideoGeometry, carVideoMaterial);
carVideo.play();
scene.add(carVideoScreen);

let switchVideo = document.getElementById("switchVideo");
let switchVideoTexture = new THREE.VideoTexture(switchVideo);
switchVideoTexture.colorSpace = THREE.SRGBColorSpace;
switchVideoTexture.magFilter = THREE.LinearFilter;
switchVideoTexture.minFilter = THREE.LinearFilter;
var switchVideoMaterial = new THREE.MeshBasicMaterial({
    map: switchVideoTexture,
    side: THREE.FrontSide,
});
let switchVideoGeometry = new THREE.PlaneGeometry(16, 16);
let switchVideoScreen = new THREE.Mesh(switchVideoGeometry, switchVideoMaterial);
switchVideo.play();
scene.add(switchVideoScreen);

let waveVideo = document.getElementById("waveVideo");
let waveVideoTexture = new THREE.VideoTexture(waveVideo);
waveVideoTexture.colorSpace = THREE.SRGBColorSpace;
waveVideoTexture.magFilter = THREE.LinearFilter;
waveVideoTexture.minFilter = THREE.LinearFilter;
var waveVideoMaterial = new THREE.MeshBasicMaterial({
    map: waveVideoTexture,
    side: THREE.FrontSide,
});
let waveVideoGeometry = new THREE.PlaneGeometry(16, 16);
let waveVideoScreen = new THREE.Mesh(waveVideoGeometry, waveVideoMaterial);
waveVideo.play();
scene.add(waveVideoScreen);

let astroVideo = document.getElementById("astroVideo");
let astroVideoTexture = new THREE.VideoTexture(astroVideo);
astroVideoTexture.colorSpace = THREE.SRGBColorSpace;
astroVideoTexture.magFilter = THREE.LinearFilter;
astroVideoTexture.minFilter = THREE.LinearFilter;
var astroVideoMaterial = new THREE.MeshBasicMaterial({
    map: astroVideoTexture,
    side: THREE.FrontSide,
});
let astroVideoGeometry = new THREE.PlaneGeometry(16, 9);
let astroVideoScreen = new THREE.Mesh(astroVideoGeometry, astroVideoMaterial);
astroVideo.play();
scene.add(astroVideoScreen);

const camYPoints = [0, -12, -28]

function wheelFunction(event) {

    if(event.deltaY > 0 && camera.position.y < 0)
    {
        camera.position.y += 1;
        console.log(camera.position.y);
    }

    if(event.deltaY < 0 && camera.position.y > -37)
    {
        camera.position.y -= 1;
        console.log(camera.position.y);
    }
}

camera.position.z = 5;

//--------------------------------------------ANIMATE--------------------------------------------------//

function animate() {
	requestAnimationFrame( animate );

    switchVideoScreen.position.y = -12.5;
    waveVideoScreen.position.y = -28.5;
    astroVideoScreen.position.y = -37;

    switchVideoTexture.needsUpdate = true;
    carVideoTexture.needsUpdate = true;
    waveVideoTexture.needsUpdate = true;
    astroVideoTexture.needsUpdate = true;

	renderer.render( scene, camera );
}
animate();

//---------------------------------------------MOUSE EVENTS-------------------------------------------------//

function onMouseDown(event){
   
}

function onMouseUp(event){
    
}