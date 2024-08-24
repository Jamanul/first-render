// import * as THREE from 'three';
 import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const canvas=document.querySelector('canvas.threeJs') 
// //scene
// const scene = new THREE.Scene()
// //object

// const newGeometry= new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({color: "red"})
// const mesh = new THREE.Mesh(newGeometry,material)
// scene.add(mesh)

// //camera
// const sizes={
//   height: '800',
//   width: '600'
// }

// const camera =new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,30)
// camera.position.z=3
// scene.add(camera)

// const renderer =new THREE.WebGLRenderer({
//   canvas: canvas
// })

// renderer.setSize(sizes.width,sizes.height)


// // initialize the orbit-control
// const controls =new OrbitControls(camera,canvas)
// controls.autoRotate=true
// controls.enableDamping=true
// const renderLoop=()=>{
//   //console.log('a')
//   controls.update()
//   renderer.render(scene,camera)
//   window.requestAnimationFrame(renderLoop)
// }
// renderLoop()

// renderer.render(scene,camera)


import * as THREE from "three"

const scene = new THREE.Scene()

//object
// const newGeometry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({color: "red"})
// const mesh = new THREE.Mesh(newGeometry,material)

// //mesh position (duh)

// //mesh.position.set(1,2,-0.5)

// //mesh scale (bigger or smaller)
// //mesh.scale.set(0.5,2,0.5)

// //mesh rotation
// mesh.rotation.reorder('YXZ')
// //reorder needs so it doesn't gimble lock.Meaning if you rotate a object it will rotate according to all the axis. if you reorder first it will change according to its axis.
// mesh.rotation.x=Math.PI *0.25
// mesh.rotation.y=Math.PI *0.25



// scene.add(mesh)

const group = new THREE.Group()
scene.add(group)
const cube1 = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: "red"})
const mesh1 = new THREE.Mesh(cube1,material)

group.add(mesh1)
const cube2 = new THREE.BoxGeometry(1,1,1)
const material1 = new THREE.MeshBasicMaterial({color: "green"})
const mesh2 = new THREE.Mesh(cube2,material1)
mesh2.position.x=2
group.add(mesh2)
const cube3 = new THREE.BoxGeometry(1,1,1)
const material2 = new THREE.MeshBasicMaterial({color: "blue"})
const mesh3 = new THREE.Mesh(cube3,material2)
mesh3.position.x=-2
group.add(mesh3)

group.position.y= 1




const sizes={
    height: '800',
    width: '600'
  }

//camera
const camera =new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,30)
camera.position.z=3
scene.add(camera)

const renderer =new THREE.WebGLRenderer({
  canvas: canvas
})

//look at represent where to look at   
//camera.lookAt(mesh.position)

//red is x ,green is y, blue is z 
const axesHelper = new THREE.AxesHelper( 5 )
scene.add(axesHelper)
renderer.setSize(sizes.width,sizes.height)


// initialize the orbit-control
const controls =new OrbitControls(camera,canvas)
controls.autoRotate=true
controls.enableDamping=true
const renderLoop=()=>{
  //console.log('a')
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderLoop)
}
renderLoop()

renderer.render(scene,camera)