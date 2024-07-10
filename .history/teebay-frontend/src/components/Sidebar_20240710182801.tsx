import { useNavigate } from 'react-router-dom';
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards } from "react-icons/hi";
import { useAuth } from "../hooks/useAuth";

export default function CustomSidebar() {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item icon={HiChartPie}>
                        {user?.name}
                        <span className="block">{user?.email}</span>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item onClick={() => navigate("/dashboard/products")} icon={HiChartPie}>
                        My Products
                    </Sidebar.Item>
                    <Sidebar.Item onClick={() => navigate("/dashboard")} icon={HiViewBoards} label="all" labelColor="dark">
                        History
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
