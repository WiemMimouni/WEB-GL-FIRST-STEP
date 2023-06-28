console.log(THREE);
const scene = new THREE.Scene();


//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//sizes
const sizes ={
    width:800 , 
    height:600
}

//camera
const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height ); // the first parametre is the field of view  , the second is the aspect ratio
scene.add(camera);
