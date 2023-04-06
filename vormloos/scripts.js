
var scene = new THREE.Scene();

var camera = new THREE.OrthographicCamera(
          window.innerWidth / -2,
          window.innerWidth / 2,
          window.innerHeight / 2,
          window.innerHeight / -2,
          1,
          2000
        );

camera.position.z = 1000;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("container").appendChild(renderer.domElement);

//var controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true;
//controls.dampingFactor = 0.25;
//controls.enableZoom = true;

//var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
//keyLight.position.set(-100, 0, 100);

//var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
//fillLight.position.set(100, 0, 100);

//var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
//backLight.position.set(100, 0, -100).normalize();

//scene.add(keyLight);
//scene.add(fillLight);
//scene.add(backLight);

var object;

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/vormloos/assets/');
objLoader.load('jumbo2022.obj', function (loadedObject) {
	
	object = loadedObject; // Assign the loaded object to the 'object' variable
	object.scale.y = 0.7071065624; // Scale the cube only in the z direction
	scene.add(object);
	//loadedObject.position.y -= 60;
	
	// Traverse the object hierarchy and apply a material to all Mesh objects
	object.traverse(function (child) {
		if (child instanceof THREE.Mesh) {
			child.material = new THREE.MeshBasicMaterial({
				color: 0xfad201, // Set the color to yellow
			});
		}
	});

});

// Animate the loaded object
var animate = function () {
    requestAnimationFrame(animate);

    if (object) {
        object.rotation.x += 0.01;
        object.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
};

animate();

//var animate = function () {
//	requestAnimationFrame( animate );
//	controls.update();
//	renderer.render(scene, camera);
//};

animate();
