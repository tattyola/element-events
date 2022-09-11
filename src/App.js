import './App.css';

function App() {

  const helloButton = () => {
    console.log('Hello!!!!');
  }

  const plusNumber = (n) => {
      console.log('Number ', n)
  }
  return (
    <div className="App">
      <button onClick={helloButton}>My Button</button>
      <button onClick={() => console.log('Plus')}>Plus</button>
      <button onClick={() => plusNumber(123)}>Plus number</button>
    </div>
  );
}

export default App;
