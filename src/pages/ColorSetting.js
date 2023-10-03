import React, { useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export  function ColorSettings() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const colorBlockRef = useRef(null);
    const colorInputRef = useRef(null);

    const updateColor = (newColor) => {
        setSearchParams({ color: newColor });
        colorBlockRef.current.style.backgroundColor = newColor;
    };

    useEffect(() => {
        const color = searchParams.get('color');
        if (color) {
            colorInputRef.current.value = color;
            colorBlockRef.current.style.backgroundColor = color;
        }
    }, [searchParams]);

    const handleGetParamsClick = () => {
        const color = searchParams.get('color');
        if (color) {
            colorBlockRef.current.style.backgroundColor = color;
        }
    };

    return (
        <div>
            <h1>Настройки Цвета</h1>
            <input
                ref={colorInputRef}
                type="color"
                onChange={(e) => updateColor(e.target.value)}
            />
            <button onClick={handleGetParamsClick}>Получить параметры</button>
            <div ref={colorBlockRef} className="color-block"></div>
        </div>
    );
}


