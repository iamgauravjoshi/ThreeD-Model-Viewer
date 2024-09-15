import React from "react";
import {IModelPositionProps} from "../model/ModelViewer";

export interface IModelAxisPositionProps {
    modelAxisPosition: IModelPositionProps;
    setModelAxisPosition: (porps: any) => void;
}

const ModelAxisPosition = ({modelAxisPosition, setModelAxisPosition}: IModelAxisPositionProps) => {
    return (
        <>
            <div className={'flex flex-col gap-2'}>
                <h3 className={'text-base font-bold underline'}>Model Axis Position</h3>
                <div className={'flex gap-2'}>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'model-x-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                            X :
                        </label>
                        <input
                            id={'model-x-position'}
                            type={'number'}
                            defaultValue={modelAxisPosition.x}
                            onChange={(e: any) => setModelAxisPosition({
                                ...modelAxisPosition,
                                x: event.target.value
                            })}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'hotspot-y-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                            Y :
                        </label>
                        <input
                            id={'model-y-position'}
                            type={'number'}
                            defaultValue={modelAxisPosition.y}
                            onChange={(e: any) => setModelAxisPosition({
                                ...modelAxisPosition,
                                y: event.target.value
                            })}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'model-z-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                            Z :
                        </label>
                        <input
                            id={'model-z-position'}
                            type={'number'}
                            defaultValue={modelAxisPosition.z}
                            onChange={(e: any) => setModelAxisPosition({
                                ...modelAxisPosition,
                                z: event.target.value
                            })}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelAxisPosition;