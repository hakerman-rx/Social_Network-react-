import './App.scss';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className='header'>header</header>
        <Main/>
        <Nav />
      </div>
    </div>
  );
}

export default App;
