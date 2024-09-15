import React from "react";
import {Plus} from "lucide-react";
import {IModelPositionProps} from "../model/ModelViewer";

export interface IModelLightsProps {
    modelLights: IModelPositionProps;
    setModelLights: (porps: any) => void;
}

const ModelLights = ({modelLights, setModelLights}: IModelLightsProps) => {

    const handleLightSelection = (e: any, index: number) => {
        console.log('selected index: ', index);
        console.log('previous name: ', modelLights[index].name);
        console.log('new selected name: ', e.target.value);
        // console.log('changed light: ', modelLights[index].name=e.target.value);
        // modelLights[index].name = e.target.value;
        // const newModelLights = [...modelLights];
        // console.log('newModelLights: ', modelLights)
        // setModelLights([...modelLights, modelLights[index].name=e.target.value])
    }

    const addModelLights = () => {
        setModelLights([...modelLights, modelLight]);
    }

    return (
        <>
            <div className={'flex flex-col gap-2'}>
                <h3 className={'text-base font-bold underline'}>Model Lighting</h3>
                {
                    modelLights.length > 0 && modelLights?.map((light: IModelLightProps, index: number) => {
                        return (
                            <div key={index} className={'flex flex-col gap-1 mb-4'}>
                                <span className={'text-sm font-medium text-gray-800'}>Light {index + 1}</span>
                                <select
                                    id="lights"
                                    onChange={(e:any)=>handleLightSelection(e, index)}
                                    defaultValue={'Choose lighting'}
                                    className="cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2">
                                    <option value={'ambientLight'}>Ambient Light</option>
                                    <option value={'directionalLight'}>Directional Light</option>
                                    <option value={'hemisphereLight'}>Hemisphere Light</option>
                                </select>
                                <div className='col-span-2'>
                                    <label
                                        htmlFor={'light-intensity'}
                                        className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                                        Intensity :
                                    </label>
                                    <input
                                        id={'light-intensity'}
                                        type={'number'}
                                        defaultValue={light.intensity}
                                        // onChange={(e: any) => setModelLightProps({...light, intensity: event.target.value})}
                                        className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                                    />
                                </div>
                            </div>
                        )
                    })
                }

                <button
                    className={'px-2 py-1 w-fit bg-[#007BFF] text-white border-none rounded-md cursor-pointer flex align-center gap-1 font-semibold text-sm hover:bg-[#0056B3]'}
                    onClick={addModelLights}><Plus size={16}/> Add light
                </button>
            </div>
        </>
    )
}

export default ModelLights;