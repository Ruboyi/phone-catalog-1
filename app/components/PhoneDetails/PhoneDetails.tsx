'use client';
import useCartStore from '@/app/store/cartStore';
import PhoneCard from '../PhoneCard/PhoneCard';
import { PhoneDetail } from '@/app/lib/definitons';
import styles from './PhoneDetails.module.css';
import Image from 'next/image';
import { useState } from 'react';

interface PhoneDetailsProps {
    phone: PhoneDetail;
}

const PhoneDetails: React.FC<PhoneDetailsProps> = ({ phone }) => {
    const cart = useCartStore((state: any) => state.cart);

    const isInCart = cart.some((item: any) => item.id === phone.id);

    const [selectedImage, setSelectedImage] = useState(
        phone.colorOptions[0].imageUrl
    );

    const [selectedSize, setSelectedSize] = useState(
        phone.storageOptions[0].capacity
    );

    const [selectedPrice, setSelectedPrice] = useState(
        phone.storageOptions[0].price
    );

    const [selectedColor, setSelectedColor] = useState(phone.colorOptions[0]);

    const handleColorClick = (color: {
        imageUrl: string;
        hexCode: string;
        name: string;
    }) => {
        setSelectedImage(color.imageUrl);
        setSelectedColor(color);
    };
    const handleSizeClick = (size: string, price: number) => {
        setSelectedSize(size);
        setSelectedPrice(price);
    };

    const addToCart = useCartStore((state: any) => state.addToCart);

    const handleAddToCart = () => {
        addToCart({
            id: phone.id,
            name: phone.name,
            price: selectedPrice,
            imageUrl: selectedImage,
            color: selectedColor.hexCode,
            colorName: selectedColor.name,
            size: selectedSize,
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.imageContainer}>
                    <Image
                        fill
                        src={selectedImage}
                        alt={phone.name}
                        className={styles.productImage}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{phone.name}</h1>
                        <p className={styles.price}>From {selectedPrice} EUR</p>
                    </div>

                    <h3 className={styles.description}>
                        STORAGE ¿HOW MUCH SPACE DO YOU NEED?
                    </h3>
                    <div className={styles.storageOptions}>
                        {phone.storageOptions.map((option, index) => (
                            <div
                                key={index}
                                className={`${styles.storageButton} ${
                                    selectedSize === option.capacity
                                        ? styles.active
                                        : ''
                                }`}
                                onClick={() =>
                                    handleSizeClick(
                                        option.capacity,
                                        option.price
                                    )
                                }
                            >
                                {option.capacity}
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.description}>
                        COLOR. PICK YOUR FAVOURITE.
                    </h3>
                    <div className={styles.colorOptions}>
                        {phone.colorOptions.map(color => (
                            <div
                                key={color.hexCode}
                                className={`${styles.colorContainer} ${
                                    selectedColor.hexCode === color.hexCode
                                        ? styles.active
                                        : ''
                                }`}
                                onClick={() => handleColorClick(color)}
                            >
                                <div
                                    className={styles.colorButton}
                                    style={{ backgroundColor: color.hexCode }}
                                />
                            </div>
                        ))}
                    </div>
                    <p className={styles.selectedColorName}>
                        {selectedColor.name}
                    </p>

                    <button
                        className={styles.addToCartButton}
                        onClick={handleAddToCart}
                        disabled={isInCart}
                    >
                        Añadir
                    </button>
                </div>
            </div>
            <div className={styles.specifications}>
                <h2>Specifications</h2>
                <table>
                    <tbody>
                        {Object.entries(phone.specs).map(([key, value]) => (
                            <tr key={key}>
                                <th className={styles.specKey}>
                                    {key.toUpperCase()}
                                </th>
                                <td className={styles.specKey}>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.similarItems}>
                <h2>Similar Items</h2>
                <div className={styles.similarProducts}>
                    {phone.similarProducts.map(product => (
                        <PhoneCard key={product.id} phone={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;
