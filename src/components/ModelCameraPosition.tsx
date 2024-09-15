import React from "react";
import {IModelPositionProps} from "../model/ModelViewer";

export interface IModelCameraPositionProps {
    cameraPosition: IModelPositionProps;
    setCameraPosition: (porps: any) => void;
}

const ModelCameraPosition = ({cameraPosition, setCameraPosition}: IModelCameraPositionProps) => {
    return (
        <>
            <div className={'flex flex-col gap-2'}>
                <h3 className={'text-base font-bold underline'}>Camera Position</h3>
                <div className={'flex gap-2'}>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'camera-x-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                            X :
                        </label>
                        <input
                            id={'camera-x-position'}
                            type={'number'}
                            defaultValue={cameraPosition.x}
                            onChange={(e: any) => setCameraPosition({...cameraPosition, x: event.target.value})}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'camera-y-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                            Y :
                        </label>
                        <input
                            id={'camera-y-position'}
                            type={'number'}
                            defaultValue={cameraPosition.y}
                            onChange={(e: any) => setCameraPosition({...cameraPosition, y: event.target.value})}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'camera-z-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                            Z :
                        </label>
                        <input
                            id={'camera-z-position'}
                            type={'number'}
                            defaultValue={cameraPosition.z}
                            onChange={(e: any) => setCameraPosition({...cameraPosition, z: event.target.value})}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelCameraPosition;