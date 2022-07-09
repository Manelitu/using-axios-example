import Loading from '../Loading/Loading';
import './Table.css';

const Table = ({ data, title }) => {
  
  return (
    <div id="wrapper">
      <h1> { title } </h1>
      <table id="keywords" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          {
            data
              ? (
                data.map((item) => (
                  <tr key={item.id} className="lalign">
                    <td>{item.albumId}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.thumbnailUrl} width="50px" />
                    </td>
                  </tr>
                ))
              )
              : (<Loading />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;