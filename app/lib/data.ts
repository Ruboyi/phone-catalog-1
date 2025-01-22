import api from '@/app/lib/axios.instance';
import { Phone, PhoneDetail } from '@/app/lib/definitons';

export const getPhones = async (): Promise<Phone[]> => {
    const response = await api.get('/products');
    // Remove duplicates
    const phones = response.data.filter(
        (phone: Phone, index: number, self: Phone[]) =>
            self.findIndex(t => t.id === phone.id) === index
    );
    return phones;
};

export const getPhoneById = async (id): Promise<PhoneDetail> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};
