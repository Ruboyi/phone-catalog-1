import api from '@/app/lib/axios.instance';
import { Phone, PhoneDetail } from '@/app/lib/definitons';
export const getPhones = async (searchValue: string): Promise<Phone[]> => {
    try {
        const response = await api.get('/products', {
            params: {
                search: searchValue,
            },
        });
        // Remove duplicates
        const phones = response.data.filter(
            (phone: Phone, index: number, self: Phone[]) =>
                self.findIndex(t => t.id === phone.id) === index
        );

        return phones;
    } catch (error) {
        return [];
    }
};

export const getPhoneById = async (id): Promise<PhoneDetail | null> => {
    try {
        const response = await api.get(`/products/${id}`);

        if (response.status === 404) {
            return null;
        }
        return response.data;
    } catch (error) {
        return null;
    }
};
