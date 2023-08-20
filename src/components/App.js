import '../App.css';
import Objects from './Objects';
import NestedObjects from './NestedObjects';

function App() {
  return (
    <div className="App">
      <h1>Updating objects and arrays in state</h1>
      <h2>Updating Objects in State.</h2>
      <Objects />

      <h2>Updating Nested Objects</h2>
      <NestedObjects />
    </div>
  );
}

export default App;
