import { useEffect, useState } from 'react';
import Table from './components/Table/Table';
import Table2 from './components/Table2/Table';
import useAxios from './services/useAxios';

function App() {
  const [posts, setPosts] = useState(null);
  const [info, setInfo] = useState(null);

  const { getAlbum, getInfo } = useAxios();

  useEffect(() => {
    (async function() {
      const getPostsFromApi = await getAlbum();
      const getInfoFromApi = await getInfo();

      setPosts(getPostsFromApi);
      setInfo(getInfoFromApi);
      
      console.log('Posts', posts);
      console.log('Info', info);
    })();
  }, []);

  return (
    <>
      <Table data={posts} title='Album' />
      <br/> 
      <br/> 
      <Table2 data={info} title='Informações' />
    </>
  );
};

export default App;
