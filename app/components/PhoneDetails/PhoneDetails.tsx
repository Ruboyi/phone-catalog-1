'use client';
import useCartStore from '@/app/store/cartStore';
import PhoneCard from '../PhoneCard/PhoneCard';
import { PhoneDetail } from '@/app/lib/definitons';
import styles from './PhoneDetails.module.css';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';

interface PhoneDetailsProps {
    phone: PhoneDetail;
}

const PhoneDetails: React.FC<PhoneDetailsProps> = ({ phone }) => {
    const router = useRouter();
    const cart = useCartStore((state: any) => state.cart);

    const isInCart = cart.some((item: any) => item.id === phone.id);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const [selectedPrice, setSelectedPrice] = useState<number>(
        phone.storageOptions[0].price
    );

    const [selectedColor, setSelectedColor] = useState<{
        imageUrl: string;
        hexCode: string;
        name: string;
    } | null>(null);

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

    const buttonsDisabled = useMemo(() => {
        return selectedSize === null || selectedColor === null || isInCart;
    }, [selectedSize, selectedColor, isInCart]);

    const handleAddToCart = () => {
        addToCart({
            id: phone.id,
            name: phone.name,
            price: selectedPrice,
            imageUrl: selectedImage,
            color: selectedColor?.hexCode,
            colorName: selectedColor?.name,
            size: selectedSize,
        });
    };

    const handleGoBack = () => {
        router.back();
    };

    return (
        <>
            <button
                className={styles.backButton}
                onClick={handleGoBack}
                aria-label="Go back"
            >
                {'< BACK'}
            </button>
            <main className={styles.container} data-testid="phone-details">
                <div className={styles.header}>
                    <div className={styles.imageContainer}>
                        <Image
                            fill
                            src={
                                selectedImage ?? phone.colorOptions[0].imageUrl
                            }
                            alt={phone.name}
                            className={styles.productImage}
                            data-testid="product-image"
                        />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.info}>
                            <h1
                                className={styles.title}
                                data-testid="product-title"
                            >
                                {phone.name}
                            </h1>
                            <p
                                className={styles.price}
                                data-testid="product-price"
                            >
                                {selectedSize
                                    ? selectedPrice
                                    : `From ${selectedPrice}`}{' '}
                                EUR
                            </p>
                        </div>

                        <h3 className={styles.description}>
                            STORAGE ¿HOW MUCH SPACE DO YOU NEED?
                        </h3>
                        <div
                            className={styles.storageOptions}
                            data-testid="storage-options"
                        >
                            {phone.storageOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className={`${styles.storageButton} ${
                                        selectedSize === option.capacity
                                            ? styles.active
                                            : ''
                                    }`}
                                    data-testid={`storage-option-${index}`}
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
                        <div
                            className={styles.colorOptions}
                            data-testid="color-options"
                        >
                            {phone.colorOptions.map(color => (
                                <div
                                    key={color.hexCode}
                                    className={`${styles.colorContainer} ${
                                        selectedColor?.hexCode === color.hexCode
                                            ? styles.active
                                            : ''
                                    }`}
                                    data-testid={`color-option-${color.hexCode}`}
                                    onClick={() => handleColorClick(color)}
                                >
                                    <div
                                        className={styles.colorButton}
                                        style={{
                                            backgroundColor: color.hexCode,
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <p
                            className={styles.selectedColorName}
                            data-testid="selected-color-name"
                        >
                            {selectedColor?.name}
                        </p>

                        <Button
                            onClick={handleAddToCart}
                            disabled={buttonsDisabled}
                            className={styles.addToCartButton}
                            data-testid="add-to-cart-button"
                        >
                            Añadir
                        </Button>
                    </div>
                </div>
                <div
                    className={styles.specifications}
                    data-testid="specifications"
                >
                    <h2>Specifications</h2>
                    <table>
                        <tbody>
                            {Object.entries(phone.specs).map(([key, value]) => (
                                <tr key={key}>
                                    <th
                                        className={styles.specKey}
                                        data-testid={`spec-key-${key}`}
                                    >
                                        {key.toUpperCase()}
                                    </th>
                                    <td
                                        className={styles.specKey}
                                        data-testid={`spec-value-${key}`}
                                    >
                                        {value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div
                    className={styles.similarItems}
                    data-testid="similar-products"
                >
                    <h2>Similar Items</h2>
                    <div className={styles.similarProducts}>
                        {phone.similarProducts.map(product => (
                            <PhoneCard
                                key={product.id}
                                phone={product}
                                data-testid={`similar-product-${product.id}`}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default PhoneDetails;
