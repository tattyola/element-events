import './App.css';

function App() {

  const helloButton = () => {
    console.log('Hello!!!!');
  }

  const plusNumber = (n) => {
      console.log('Number ', n)
  }

  const onChangeName = (event) => {
      console.log(event.target.value)
  }
  return (
    <div className="App">
      <button onClick={helloButton}>My Button</button>
      <button onClick={() => console.log('Plus')}>Plus</button>
      <button onClick={() => plusNumber(123)}>Plus number</button>

        <hr/>

        <input onChange={onChangeName}/>
    </div>
  );
}

export default App;
