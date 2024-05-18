import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import { ProtectedRoutes } from './auth/ProtectedRoutes';
import { AuthProvider } from './auth/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App
