
import './App.css';
import Form from './Hoc&Pure/Form';
import PureForm from './Hoc&Pure/Pure';

function App() {
  return (
    <div className="App">
      <h1>Created Using HOC Component</h1>
     <Form/>
     <h1>Created Using Pure Component</h1>
     <PureForm/>
    </div>
  );
}

export default App;
