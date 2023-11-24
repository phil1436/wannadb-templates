import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.scss';
import Profile from './components/Profile/Profile';
function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/login" Component={Login} />
                    <Route path="/profile" Component={Profile} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;