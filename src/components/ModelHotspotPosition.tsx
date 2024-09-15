import React from "react";
import {IModelPositionProps} from "../model/ModelViewer";

export interface IModelHotspotPositionProps {
    hotspotPosition: IModelPositionProps;
    setHotspotPosition: (porps: any) => void;
}

const ModelHotspotPosition = ({hotspotPosition, setHotspotPosition}: IModelHotspotPositionProps) => {
    return (
        <>
            <div className={'flex flex-col gap-2'}>
                <h3 className={'text-base font-bold underline'}>Hotspot Position</h3>
                <div className={'flex gap-2'}>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'hotspot-x-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white'>
                            X :
                        </label>
                        <input
                            id={'hotspot-x-position'}
                            type={'number'}
                            defaultValue={hotspotPosition.x}
                            onChange={(e: any) => setHotspotPosition({...hotspotPosition, x: event.target.value})}
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
                            id={'hotspot-y-position'}
                            type={'number'}
                            defaultValue={hotspotPosition.y}
                            onChange={(e: any) => setHotspotPosition({...hotspotPosition, y: event.target.value})}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                    <div className='col-span-2'>
                        <label
                            htmlFor={'hotspot-z-position'}
                            className='block mb-1 text-sm font-medium text-gray-600 dark:text-white no-wrap'>
                            Z :
                        </label>
                        <input
                            id={'hotspot-z-position'}
                            type={'number'}
                            defaultValue={hotspotPosition.z}
                            onChange={(e: any) => setHotspotPosition({...hotspotPosition, z: event.target.value})}
                            className='border border-gray-300 text-gray-900 text-sm font-semibold rounded-md p-1.5 max-w-16'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelHotspotPosition;