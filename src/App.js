import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";

//jss 문법
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App;
