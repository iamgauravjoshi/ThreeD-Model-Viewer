import React, {useState} from "react";
import {Info} from "lucide-react";

const Tooltip = () => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    return (
        <section className={'absolute top-4 left-4'}>
            <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                type="button"
                className="text-blue font-medium absolute top-4 left-4 "
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <Info size={36} color={'blue'}/>
            </button>
            {/*{*/}
            {/*    showTooltip &&*/}
            {/*    */}
            {/*}*/}
            <div
                id="tooltip-bottom"
                role="tooltip"
                className="z-50 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            >
                Tooltip content
                Tooltip content
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow/>
            </div>
        </section>
    )
};

export default Tooltip;