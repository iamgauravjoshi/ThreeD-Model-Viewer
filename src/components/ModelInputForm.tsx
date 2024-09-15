import React, { useState } from 'react';

interface ModelInputFormProps {
    onSubmit: (url: string) => void;
}

const ModelInputForm: React.FC<ModelInputFormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim() === '') {
            setError('Model URL cannot be empty.');
        } else {
            setError('');
            onSubmit(inputValue);
        }
    };

    return (
        <div className="form">
            <h1 className="text-3xl font-bold underline mr-12">3D Model Viewer</h1>
            <input
                type="text"
                value={inputValue}
                placeholder="Enter GLTF model URL"
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button className={'px-4 py-10 bg-[#007BFF] text-white border-none rounded-sm cursor-pointer hover:bg-[#0056B3]'} onClick={handleSubmit}>Submit</button>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default ModelInputForm;
