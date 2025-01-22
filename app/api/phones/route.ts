import api from '@/app/lib/axios.instance';
import { Phone } from '@/app/lib/definitons';

export const getPhones = async (): Promise<Phone[]> => {
    const response = await api.get('/products');
    // Remove duplicates
    const phones = response.data.filter(
        (phone: Phone, index: number, self: Phone[]) =>
            self.findIndex(t => t.id === phone.id) === index
    );
    return phones;
};
