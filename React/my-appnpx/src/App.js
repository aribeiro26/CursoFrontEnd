import logo from './logo.svg';
import './App.css';
import Logo from './TagMarybe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seja Bem Vindo a MaryBe Closet
        </p>
        <article>
          <Logo/>
        </article>
        <a
          className="App-link"
          href="https://www.instagram.com/marybecloset/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse nosso Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
