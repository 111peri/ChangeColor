import React from 'react';
import { useLocation } from 'react-router-dom';

export function ColorView() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const color = searchParams.get('color');

    return (
        <div>
            <h1>Просмотр Цвета</h1>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color,
                    marginTop: '20px',
                }}
            ></div>
        </div>
    );
}




