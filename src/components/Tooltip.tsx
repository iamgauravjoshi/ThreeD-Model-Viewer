import React, {useState} from "react";
import {Info} from "lucide-react";

const Tooltip = () => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    return (
        <section className={'absolute top-2 left-2 z-10'}>
            <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                type="button"
                className="text-blue font-medium absolute top-2 left-2"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <Info size={36} color={'blue'} className={'cursor-pointer'}/>
            </button>
            {
                showTooltip &&
                <div
                    id="tooltip-bottom"
                    role="tooltip"
                    className="absolute top-12 left-1 z-50 inline-block min-w-60 px-3 py-2 text-sm font-medium bg-gray-700 rounded-lg shadow-xl tooltip text-white"
                >
                    Tooltip content Tooltip content Tooltip content Tooltip content Tooltip content
                </div>

            }

        </section>
    )
};

export default Tooltip;