'use client';
import React, { useEffect } from 'react';
import useToastStore from '@/app/store/useToastStore';

import styles from './Toast.module.css';

const Toast: React.FC = () => {
    const { toast, hideToast } = useToastStore();

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                hideToast();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [toast, hideToast]);

    if (!toast) return null;

    return (
        <div className={`${styles.toast} ${styles.show}`}>
            <div className={styles.message}>{toast.message}</div>
            {toast.actionName && toast.action && (
                <button
                    className={styles.action}
                    onClick={() => {
                        toast.action?.();
                        hideToast();
                    }}
                >
                    {toast.actionName.toUpperCase()}
                </button>
            )}
        </div>
    );
};

export default Toast;
