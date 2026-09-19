import './App.css';

function HelloWorld() {
  return <h1>Hello World version 2!</h1>;
}

function App() {
  return (
    <main className="App">
      <HelloWorld />
      <p>My first AWS Amplify deployment.</p>
    </main>
  );
}

export default App;