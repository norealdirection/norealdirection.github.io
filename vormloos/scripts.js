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

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

var object;

var objLoader = new THREE.OBJLoader();
objLoader.setPath("/vormloos/assets/");
objLoader.load("jumbo2022.obj", function (loadedObject) {
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
var scrollingSpeed = 0;
var animate = function () {
  requestAnimationFrame(animate);

  if (object) {
    var rotationSpeed = 0.005 + scrollingSpeed * 0.0001;
    object.rotation.x += rotationSpeed;
    object.rotation.y += rotationSpeed / 2;
    renderer.render(scene, camera);
  }
};

animate();

// Update scrolling speed based on the scroll event
window.addEventListener("scroll", function (event) {
  scrollingSpeed = window.pageYOffset;
});
