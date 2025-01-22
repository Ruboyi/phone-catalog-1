import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    outline = false,
    className,
    ...rest
}) => {
    const buttonClassName = classNames(
        styles.button,
        {
            [styles.outline]: outline,
            [styles.normal]: !outline,
        },
        className
    );

    return (
        <button className={buttonClassName} {...rest}>
            {children}
        </button>
    );
};

export default Button;
