import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
