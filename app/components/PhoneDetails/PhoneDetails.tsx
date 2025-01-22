'use client';

import React, { useEffect } from 'react';

import PhoneCard from '../PhoneCard/PhoneCard';
import { PhoneDetail } from '@/app/lib/definitons';

interface PhoneDetailsProps {
    phone: PhoneDetail;
}

const PhoneDetails: React.FC<PhoneDetailsProps> = ({ phone }) => {
    const handleColorClick = (imageUrl: string) => {
        const imageElement = document.getElementById('product-image');
        if (imageElement) {
            (imageElement as HTMLImageElement).src = imageUrl; // Cambiamos el `src` de la imagen directamente
        }
    };

    return (
        <div>
            <h1>{phone.name}</h1>
            <img
                id="product-image" // Referencia para actualizar la imagen
                src={phone.colorOptions[0].imageUrl}
                alt={phone.name}
                style={{ width: '300px' }}
            />
            <p>{phone.description}</p>
            <p>Precio base: ${phone.basePrice}</p>
            <p>Rating: {phone.rating} / 5</p>

            <h2>Opciones de color</h2>
            <div>
                {phone.colorOptions.map(color => (
                    <button
                        key={color.hexCode}
                        onClick={() => handleColorClick(color.imageUrl)}
                        style={{
                            backgroundColor: color.hexCode,
                            border: '1px solid gray',
                            margin: '5px',
                            padding: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        {color.name}
                    </button>
                ))}
            </div>

            <h2>Productos similares</h2>
            <ul>
                {phone.similarProducts.map(product => (
                    <PhoneCard key={product.id} phone={product} />
                ))}
            </ul>
        </div>
    );
};

export default PhoneDetails;
