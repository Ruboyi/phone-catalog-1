import api from '@/app/lib/axios.instance';
import { PhoneDetail } from '@/app/lib/definitons';

export const getPhoneById = async (id): Promise<PhoneDetail> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};
