import { useState } from 'react';
import FileViewer from '../FileViewer/FileViewer';
import './MyFiles.scss';

function MyFiles({ fileNames }) {
    const [viewFileName, setViewFileName] = useState('');

    if (fileNames.length == 0) {
        return (
            <div className="MyFiles">
                <i>No files uploaded</i>
            </div>
        );
    }

    return (
        <>
            {viewFileName != '' && (
                <FileViewer
                    filename={viewFileName}
                    onClose={() => {
                        setViewFileName('');
                    }}
                />
            )}
            <div className="MyFiles">
                {fileNames.map((fileName) => (
                    <div className="file hor" key={fileName}>
                        <p className="name">
                            {fileName.split('.')[0]}
                            <span className="db">
                                {fileName.split('.')[1] != undefined
                                    ? '.' + fileName.split('.')[1]
                                    : ''}
                            </span>
                        </p>
                        <button
                            className="view btn"
                            onClick={() => {
                                setViewFileName(fileName);
                            }}
                        >
                            View
                        </button>
                        <button className="delete btn">Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MyFiles;
