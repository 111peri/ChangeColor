// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {ColorView} from "./pages/ColorView";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/viewer">Просмотр цвета</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<HomePage />} />
                    <Route path="/viewer" element={<ColorView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
