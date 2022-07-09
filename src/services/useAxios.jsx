import { useState } from 'react';
import { api } from '../utils/api';

const useAxios = () => {
  const [error, setError] = useState('');

  const getAlbum = async () => {
    try {
      const post = await api.get('/photos');
      return post.data;
    } catch (err) {
      return setError(`Houve um problema ao conectar a api.\nErro: ${err}`);
    }
  }

  const getInfo = async () => {
    try {
      const post = await api.get('/todos');
      return post.data;
    } catch (err) {
      return setError(`Houve um problema ao conectar a api.\nErro: ${err}`);
    }
  }
  
  return { getInfo, getAlbum };
};

export default useAxios;