import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SuspenseProvider } from './utils';

// * pages lazy loading for better performance
const Home = lazy(() => import('./pages/Home'));
const Detection = lazy(() => import('./pages/Detection'));
const New = lazy(() => import('./pages/New'));
const Community = lazy(() => import('./pages/Community'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <>
      <Router>
        <SuspenseProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/new" element={<New />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </SuspenseProvider>
      </Router>
    </>
  );
}

export default App;
