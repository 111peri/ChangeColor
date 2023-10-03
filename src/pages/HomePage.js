// HomePage.js
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './HomePage.css';

 export function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const colorInputRef = useRef(null);
    const buttonRef = useRef(null);
    const [currentColor, setCurrentColor] = useState('');

    const handleChangeColor = () => {
        const newColor = colorInputRef.current.value;
        setCurrentColor(newColor);
        navigate(`/viewer?color=${encodeURIComponent(newColor)}`);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const colorParam = searchParams.get('color');
        if (colorParam) {
            setCurrentColor(colorParam);
        }
    }, [location.search]);

    useEffect(() => {
        buttonRef.current.style.backgroundColor = currentColor;
    }, [currentColor]);

    return (
        <div className="button-container">
            <h2>Выберите цвет:</h2>
            <input
                type="text"
                ref={colorInputRef}
                placeholder="Введите код цвета"
                defaultValue={currentColor}
            />
            <button
                className="button"
                onClick={handleChangeColor}
                ref={buttonRef}
            >
                Установить цвет
            </button>
            <div
                className="color-box"
                style={{
                    backgroundColor: currentColor,
                }}
            ></div>
        </div>
    );
}




