// App.js
import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import {ColorSettings} from "./pages/ColorSetting";
import {ColorView} from "./pages/ColorView";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <nav>
                <ul>
                    <li>
                        <Link to="/settings">Настройки Цвета</Link>
                    </li>
                    <li>
                        <Link to="/viewer">Просмотр Цвета</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/settings" element={<ColorSettings />} />
                <Route path="/viewer" element={<ColorView />} />
            </Routes>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
