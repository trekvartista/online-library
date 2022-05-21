import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                {publicRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} element={<Component />} />
                )}
            </Routes>
        </div>
    );
}

export default App;
