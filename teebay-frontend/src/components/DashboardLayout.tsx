import { Outlet } from 'react-router-dom';
import MainNav from './MainNav.tsx';
import Sidebar from './Sidebar.tsx';

export default function DashboardLayout() {
    return (
        <div>
            <MainNav/>
            <div className='min-h-screen mx-auto container text-sm mt-5'>
                <div className="grid grid-cols-4 gap-x-8">
                    <div className='col-span-1 shadow'>
                        <Sidebar />
                    </div>
                    <div className='col-span-3'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}
