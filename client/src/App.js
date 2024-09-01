
import './App.css';
import Formtodo from './components/Formtodo';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <Formtodo />
      <Todos/>
    </div>
  );
}

export default App;
