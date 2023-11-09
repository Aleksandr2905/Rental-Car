import axios from 'axios';

const BASE_URL = 'https://652d1f5af9afa8ef4b26d076.mockapi.io/advert';

const $instance = axios.create({ baseURL: BASE_URL });

export const fetchRequestCatalogCar = async (page = 1) => {
  const { data } = await $instance.get('/advert', {
    params: {
      page: page,
      limit: 12,
    },
  });
  return data;
};

// export const fetchRequestCarById = async id => {
//   const { data } = await $instance.get(`/advert/${id}`);
//   return data;
// };
