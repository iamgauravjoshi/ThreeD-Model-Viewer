import React, { useState } from 'react';

interface ModelInputFormProps {
    onSubmit: (url: string) => void;
}

const ModelInputForm: React.FC<ModelInputFormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    // const handleSubmit = () => {
    //     if (inputValue.trim() === '') {
    //         setError('Model URL cannot be empty.');
    //     } else {
    //         setError('');
    //         onSubmit(inputValue);
    //     }
    // };

    const handleSubmit = () => {
        onSubmit(inputValue);
    };

    return (
        <div className="form text-sm font-semibold">
            <h1 className="block text-2xl font-bold mb-2">3D Model Viewer</h1>
            <input
                type="text"
                value={inputValue}
                placeholder="Enter GLTF model URL"
                onChange={(e) => setInputValue(e.target.value)}
                className={'max-w-44 px-2 py-2 border border-gray-300 rounded-md mr-2'}
            />

            <button className={'px-4 py-2 bg-[#007BFF] text-white border-none rounded-md cursor-pointer hover:bg-[#0056B3]'} onClick={handleSubmit}>Submit</button>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default ModelInputForm;
