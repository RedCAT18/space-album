import axios from 'axios';
import { key as API_KEY } from './key';

const BASE_URL = 'https://api.nasa.gov/';
const SEARCH_URL = 'https://images-api.nasa.gov/';

export const api = {
  getAPod: () =>
    axios.get(`${BASE_URL}planetary/apod?api_key=${API_KEY}`).then(res => {
      if (res.status === 200) {
        return res.data;
      } else {
        console.log(res.status);
        return { error: 'there is an error. please try again later.' };
      }
    }),
  getMarsPhotos: () =>
    axios
      .get(
        `${BASE_URL}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=${API_KEY}`
      )
      .then(res => {
        if (res.status === 200) {
          // console.log(res);

          return res.data.photos.slice(0, 5);
        } else {
          console.log(res.status);
          return { error: 'there is an error. please try again later.' };
        }
      }),
  getSearch: payload =>
    // console.log(payload);
    axios
      .get(
        `${SEARCH_URL}search?${payload.category}=${payload.quote}&media_type=image`
      )
      .then(res => {
        if (res.status === 200) {
          // console.log(res.data);
          const { items } = res.data.collection;
          return items;
        } else {
          return { error: 'there is an error. please try again later.' };
        }
      })
};
