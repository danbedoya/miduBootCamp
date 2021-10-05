import logo from './logo.svg';
import './App.css';
import Message from './Message';

const Description = () => {
  return(
    <p>Esta es la App del curso de full stack</p>
  )
}

function App() {
  return (
    <div className="App">
     <Description />
     <Message color = 'green' message ='Estamos trabajando en un curso de React'/>
    </div>
  );
}

export default App;
