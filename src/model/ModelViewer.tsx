import React, {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, PerspectiveCamera, useGLTF} from '@react-three/drei';
import {Plus} from "lucide-react";
import ModelAxisPosition from "../components/ModelAxisPosition";
import ModelCameraPosition from "../components/ModelCameraPosition";
import ModelHotspotPosition from "../components/ModelHotspotPosition";
import ModelLights from "../components/ModelLights";
import Tooltip from "../components/Tooltip";
import ModelInputForm from "../components/ModelInputForm";

export interface IModelPositionProps {
    x: number;
    y: number;
    z: number;
}

interface ModelViewerProps {
    url: string;
}

interface IModelLights {
    modelLights: IModelLightProps[]
}

export interface IModelLightProps {
    name: string;
    intensity: number;
    color?: string;
}

const modelLight = {
    name: 'ambientLight',
    intensity: 1,
    color: '#FFFFFF'
}

const ModelViewer: React.FC<ModelViewerProps> = () => {
    const [modelUrl, setModelUrl] = useState<string>("https://files-au-prod.cms.commerce.dynamics.com/cms/api/ddhmcxqxvd/binary/MLq0Z");
    const [modelAxisPosition, setModelAxisPosition] = useState<IModelPositionProps>({
        x: -5,
        y: 0,
        z: 0
    });
    const [cameraPosition, setCameraPosition] = useState<IModelPositionProps>({
        x: -4,
        y: 4.5,
        z: 10
    });
    const [hotspotPosition, setHotspotPosition] = useState<IModelPositionProps>({
        x: 4,
        y: 0.58,
        z: 0
    });
    // const [modelLights, setModelLights] = useState<IModelLightProps[]>([modelLight]);
    const [ModelLightProps, setModelLightProps] = useState<IModelLightProps>({
        name: 'ambientLight',
        intensity: 2,
        color: '#FFFFFF'
    });

    console.log('Model URL: ', modelUrl)
    const { scene } = useGLTF(modelUrl);
    // const {scene} = useGLTF("https://files-au-prod.cms.commerce.dynamics.com/cms/api/ddhmcxqxvd/binary/MLq0Z");

    // console.log('modelLights; ', modelLights);
    // Skid_Steer URL:- https://files-au-prod.cms.commerce.dynamics.com/cms/api/ddhmcxqxvd/binary/MLidf

    return (
        <>
            <section className={'flex flex-col gap-8 my-4 ml-4 mr-2 pr-4 overflow-y-scroll min-w-[290px] scrollbar'}>
                <ModelInputForm onSubmit={setModelUrl} />
                <ModelAxisPosition modelAxisPosition={modelAxisPosition} setModelAxisPosition={setModelAxisPosition}/>
                <ModelCameraPosition cameraPosition={cameraPosition} setCameraPosition={setCameraPosition}/>
                <ModelHotspotPosition hotspotPosition={hotspotPosition} setHotspotPosition={setHotspotPosition}/>
                <ModelLights ModelLightProps={ModelLightProps} setModelLightProps={setModelLightProps}/>
            </section>


            {
                modelUrl && scene &&
                <section className={'relative w-full'}>
                    <Tooltip/>
                    <Canvas className="canvasContainer"> {/* camera={{position: [-4, 2.5, 10]}} fov={40} */}
                        <PerspectiveCamera makeDefault position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}/>
                        <ModelLightProps.name intensity={ModelLightProps.intensity} color={ModelLightProps.color}/>

                        {/*<directionalLight intensity={2} color="#ffffff"/>*/}
                        {/*<hemisphereLight intensity={2} color="#ffffff"/>*/}

                        <Suspense fallback={null}>
                            <primitive object={scene}
                                       position={[modelAxisPosition.x, modelAxisPosition.y, modelAxisPosition.z]}>
                                <mesh position={[hotspotPosition.x, hotspotPosition.y, hotspotPosition.z]}>
                                    <sphereGeometry args={[0.15, 20, 20]}/>
                                    <meshStandardMaterial color={'#d90429'}/>
                                </mesh>
                            </primitive>
                        </Suspense>
                        <OrbitControls enableRotate/>
                        <axesHelper args={[8]}/>
                    </Canvas>
                </section>
            }
        </>
    );
};

export default ModelViewer;
