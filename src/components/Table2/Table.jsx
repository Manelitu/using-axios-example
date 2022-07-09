import Loading from '../Loading/Loading';
import { FiCheck, FiXSquare } from "react-icons/fi";
import './Table.css';

const Table2 = ({ data, title }) => {

  const compareStatus = (status) => {
    if (status) return (<FiCheck style={{fontSize: '20px'}} />);
    return (<FiXSquare style={{fontSize: '20px'}} />);
  };

  return (
    <div id="wrapper">
      <h1> { title } </h1>
      <table id="keywords" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {
            data
              ? (
                data.map((item) => (
                  <tr key={item.id} className="lalign">
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{compareStatus(item.completed)}</td>
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

export default Table2;