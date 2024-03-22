import { BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Signup />
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;
