import { MenuBookOutlined } from "@mui/icons-material";
import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-col w-full">
            <span className="m-4  text-2xl font-semibold text-violet-700">
                Admin Dashboard
            </span>
            <div className="flex flex-row gap-4 w-full p-4 border-t-2 border-t-gray-400">
                <div className="flex flex-row justify-between items-center rounded-lg w-48 border-2 text-green-700 border-sky-500 p-4 bg-white">
                    <MenuBookOutlined fontSize="large"/>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg">42</span>
                        <span>new books</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center rounded-lg w-52 border-2 text-sky-700 border-sky-500 p-4 bg-white">
                    <MenuBookOutlined fontSize="large"/>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg">5</span>
                        <span>purchased books</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center rounded-lg w-48 border-2 text-violet-700 border-sky-500 p-4 bg-white">
                    <MenuBookOutlined fontSize="large"/>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg">60</span>
                        <span>new users</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
