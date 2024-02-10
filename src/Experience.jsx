import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Level from './Level.jsx'
import { Debug, Physics } from '@react-three/rapier'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'
import Effects from './Effects.jsx'

export default function Experience() {

    const blockCounts = useGame((state) => state.blockCounts)
    const blockSeed = useGame((state) => state.blockSeed)


    return <>

        <color args={['#252731']} attach="background" />

        <OrbitControls makeDefault />

        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level count={blockCounts} seed={blockSeed} />
            <Player />
        </Physics>

        <Effects />

    </>
}