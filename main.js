import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const canvas=document.querySelector('canvas.threeJs') 
//scene
const scene = new THREE.Scene()
//object

const newGeometry= new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: "red"})
const mesh = new THREE.Mesh(newGeometry,material)
scene.add(mesh)

//camera
const sizes={
  height: '800',
  width: '600'
}

const camera =new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,30)
camera.position.z=3
scene.add(camera)

const renderer =new THREE.WebGLRenderer({
  canvas: canvas
})

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

  // renderer.render(scene,camera)