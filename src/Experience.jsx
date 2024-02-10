import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Level from './Level.jsx'
import { Debug, Physics } from '@react-three/rapier'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'

export default function Experience() {

    const blockCounts = useGame((state) => state.blockCounts)

    return <>


        <OrbitControls makeDefault />

        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level count={blockCounts} />
            <Player />
        </Physics>

    </>
}