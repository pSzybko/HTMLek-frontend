import React, { useEffect, useRef, useState, useMemo, useLayoutEffect, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useCursor, OrbitControls } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { STLLoader } from "three/examples/jsm/loaders/STLLoader"

import * as THREE from "three"

function ModelRender({ modelPath }) {
    const ref = useRef()

    const [hovered, hover] = useState(false)

    useCursor(hovered)
    useFrame((state, delta) => (ref.current.rotation.y += delta / 2))

    const model = useLoader(STLLoader, modelPath)

    return (
        <mesh
            geometry={model}
            ref={ref}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            scale={hovered ? 1.35 : 1}
        >
            <meshStandardMaterial color="white" flatShading={true} side={THREE.DoubleSide} />
        </mesh >
    )
}

function RenderToAscii({ backgroundColor, color, resolution = .205 }) {

    const {
        gl,
        scene,
        size,
        camera
    } = useThree()

    const myAsciiEffect = useMemo(() => {
        const myAsciiEffect = new AsciiEffect(gl, ' .:-+*=%@#', { invert: true, resolution: resolution })

        myAsciiEffect.domElement.style.position = 'absolute'
        myAsciiEffect.domElement.style.top = '0px'
        myAsciiEffect.domElement.style.left = '0px'
        myAsciiEffect.domElement.style.outline = 'none'
        myAsciiEffect.domElement.style.width = '100%'
        myAsciiEffect.domElement.style.height = '100%'

        return myAsciiEffect
    }, [gl, resolution])

    useLayoutEffect(() => {
        myAsciiEffect.domElement.style.backgroundColor = backgroundColor
        myAsciiEffect.domElement.style.color = color
    }, [backgroundColor, color])

    useEffect(() => {
        gl.domElement.parentNode.appendChild(myAsciiEffect.domElement)

        return () => {
            gl.domElement.parentNode.removeChild(myAsciiEffect.domElement)
        }
    }, [myAsciiEffect])

    useEffect(() => {
        myAsciiEffect.setSize(size.width, size.height)

    }, [myAsciiEffect, size])

    useFrame(() => {
        myAsciiEffect.render(scene, camera)
    }, 0)

}

export default function Animation({ modelPath }) {
    return (
        <>
            <div className='animation'>
                <Canvas camera={{ fov: 35 }}>
                    {/* background */}
                    <color attach="background" args={['black']} />

                    {/* lights */}
                    <spotLight position={[100, 100, 10]} angle={0.45} penumbra={1} />
                    <pointLight position={[-100, -100, 5]} />

                    {/* object */}
                    <Suspense fallback={"loading..."}>
                        <ModelRender modelPath={modelPath} />
                    </Suspense>

                    {/* contols */}
                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        minDistance={5}
                        maxDistance={200}
                    />

                    {/* effect */}
                    <RenderToAscii
                        color='black'
                        backgroundColor='#D6E6FF'
                        resolution={.200}
                    />

                </Canvas>
            </div>
        </>
    )
}
