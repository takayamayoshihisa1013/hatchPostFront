import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.js';
import "./css/App.css";
import Profile from './pages/Profile.js';
import FollowAndFollower from './pages/FollowAndFollower.js';
import Chat from './pages/Chat.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import RightNav from './pages/RightNav.js';

function RightNavWrapper() {
  // useLocation()はRouterコンポーネントの中で使わな居行けないので新しく
  const location = useLocation();
  return (
    <>
      {/* RightNavを/loginおよび/signupページ以外でのみ表示 */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && <RightNav />}
    </>
  );
}

function App() {
  return (
    <Router>
      <header className="App-header">
        <div className='logo'>
          <h1>HatchPost</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* RightNavWrapperをメインコンテンツとして追加 */}
        <RightNavWrapper />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/followAndFollower' element={<FollowAndFollower />} />
          <Route path='/chat' element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
