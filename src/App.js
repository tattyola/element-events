import './App.css';

function App() {

  const helloButton = () => {
    console.log('Hello!!!!');
  }
  return (
    <div className="App">
      <button onClick={helloButton}>My Button</button>
    </div>
  );
}

export default App;
