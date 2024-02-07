import * as THREE from 'three'

THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow' })
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'orangered' })
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' })

function BlockStart({ position = [0, 0, 0] }) {

  return <group position={position}>
    <mesh
      geometry={boxGeometry}
      receiveShadow
      position={[0, -0.1, 0]}
      scale={[4, 0.2, 4]}
      material={floor1Material}
    />
  </group>
}

function BlockSpinner({ position = [0, 0, 0] }) {

  return <group position={position}>
    <mesh
      geometry={boxGeometry}
      receiveShadow
      position={[0, -0.1, 0]}
      scale={[4, 0.2, 4]}
      material={floor2Material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={boxGeometry}
      material={obstacleMaterial}
      position={[0, -0.1, 0]}
      scale={[3.5, 0.3, 0.3]}
    />
  </group>
}

export default function Level() {
  return <>
    <BlockStart position={[0, 0, 4]} />
    <BlockSpinner position={[0, 0, 0]} />
  </>
}