// import logo from './logo.svg';
import './Main.css';
import main_frog from './main_frog.svg';

function Main() {

  return (
    <div className="Main">
      <h1 className="main-head">Лягушка дня</h1>
      <a href="/frog"><button>Жми!</button></a>
      <img className="main-img"src={main_frog}/>
    </div>
  );
}

export default Main;
