import api from './axios.instance';
import { Phone } from './definitons';

export const getPhones = async (): Promise<Phone[]> => {
    const response = await api.get('/products');
    //Viene un id repetido en la respuesta, lo eliminamos
    const phones = response.data.filter(
        (phone: Phone, index: number, self: Phone[]) =>
            self.findIndex(t => t.id === phone.id) === index
    );

    console.log(phones);

    return phones;
};

export const getPhoneById = async id => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};
