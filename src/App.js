import Form from './components/LoginForm/Form';
import {Routes,Route} from 'react-router-dom';
import SignUp from './components/LoginForm/SingUp';
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Routes>
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/' element={<Form/>} />
    </Routes>
    </div>
  );
}

export default App;
