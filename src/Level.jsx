import * as THREE from 'three'

THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow' })
const floor3Material = new THREE.MeshStandardMaterial({ color: 'orangered' })
const floor4Material = new THREE.MeshStandardMaterial({ color: 'slategrey' })

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

export default function Level() {
  return <>
    <BlockStart position={[0, 0, 0]} />
  </>
}