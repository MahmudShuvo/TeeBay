import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Buy from './pages/Buy';
import { Dashboard as PageDashboard } from './pages/Dashboard';
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import MyProducts from "./components/MyProducts.tsx";
import { Login } from "./components/Login.tsx";
import SignUp from "./components/SignUp.tsx";
import MainNav from "./components/MainNav.tsx";
import HomePage from "./pages/HomePage.tsx";
import DashboardLayout from './components/DashboardLayout.tsx';

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/product/:productId" element={<Buy/>}/>
                    </Route>
                    <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout/></ProtectedRoute>}>
                        <Route index element={<PageDashboard/>}/>
                        <Route path="/dashboard/products" element={<MyProducts/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export function Layout() {
    return (
        <div>
            <MainNav/>
            <div className='min-h-screen mx-auto container'>
                <Outlet/>
            </div>
        </div>
    );
}
