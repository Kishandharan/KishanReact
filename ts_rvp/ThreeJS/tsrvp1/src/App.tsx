import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";

function App() {

    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={10} />
            </Canvas>
        </>
    );
}

export default App
