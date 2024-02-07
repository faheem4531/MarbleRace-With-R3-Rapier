function BlockStart() {
  return <>
    <mesh receiveShadow position={[0, -0.1, 0]}>
      <boxGeometry args={[4, 0.2, 4]} />
      <meshStandardMaterial color="limegreen" />
    </mesh>
  </>
}

export default function Level() {
  return <>
    <BlockStart />
  </>
}