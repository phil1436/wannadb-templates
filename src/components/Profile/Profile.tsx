import APIService from '../../utils/ApiService';
import Navbar from '../Navbar/Navbar';
import './Profile.scss';
import { useEffect, useState } from 'react';

function Home() {
    const getUserName = () => {
        const name = localStorage.getItem('wannadbuser');
        if (name) {
            return name;
        }
        return '';
    };

    const [username, setUsername] = useState(getUserName());
    const [fileNames, setFileNames] = useState<string[]>([]);

    const getFiles = async () => {
        APIService.getFileNames(username).then((res) => {
            setFileNames(res);
        });
    };

    useEffect(() => {
        getFiles();
    }, []);

    useEffect(() => {
        const name = localStorage.getItem('wannadbuser');
        if (name) {
            setUsername(name);
        }
    }, []);

    return (
        <div className="Profile">
            <Navbar />
            <div className="content">
                <h1 className="title">
                    {username.slice(0, -2)}
                    <span className="db">{username.slice(-2)}</span>
                </h1>
                {fileNames.length > 0 && (
                    <h2>
                        <span className="db">My</span>Files
                    </h2>
                )}
                <ul>
                    {fileNames.map((fileName) => (
                        <li key={fileName}>{fileName}</li>
                    ))}
                </ul>
                <button
                    className="btn"
                    onClick={() => {
                        localStorage.removeItem('wannadbuser');
                        window.location.href = '/';
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Home;
