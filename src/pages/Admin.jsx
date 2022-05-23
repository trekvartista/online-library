import React, { useState } from "react";
import Authors from "../components/Admin/Authors";
import Books from "../components/Admin/Books";
import Dashboard from "../components/Admin/Dashboard";
import Genres from "../components/Admin/Genres";

const Admin = () => {
    const adminNavbar = ["Dashboard", "Books", "Genres", "Authors"];

    const [mode, setMode] = useState("")

    return (
        <div className="flex flex-col h-full bg-slate-200">
            <div className="flex flex-row gap-4 h-14 px-4 md:px-16 xl:px-40 w-full border-b-4 border-b-violet-700  bg-gray-200">
                {adminNavbar.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => setMode(item)}
                        className={`flex items-center p-2 cursor-pointer ${mode === item ? "bg-slate-300 font-semibold" : ""}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className="flex mt-14 mx-4 md:mx-16 xl:mx-40 ">
                {
                    (mode === "" || mode === "Dashboard") && <Dashboard /> ||
                    mode === "Books" && <Books /> ||
                    mode === "Genres" && <Genres /> ||
                    mode === "Authors" && <Authors />
                }
            </div>
        </div>
    );
};

export default Admin;
