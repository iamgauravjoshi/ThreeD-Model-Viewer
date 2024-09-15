import {useState} from 'react';
import './App.scss';
import ModelViewer from './model/ModelViewer';
import ModelInputForm from './components/ModelInputForm';

const App: React.FC = () => {
    const [modelUrl, setModelUrl] = useState<string | null>(null);

    return (
        <>
            <div className="container flex min-h-screen bg-blue-50">
                {/*<ModelInputForm onSubmit={setModelUrl} />*/}
                {/*{modelUrl && <ModelViewer url={modelUrl} />}*/}
                {/*<ModelViewer url={modelUrl} />*/}
                <ModelViewer />
            </div>
        </>
    )
}

export default App
