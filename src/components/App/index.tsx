import 'components/App/App.css';
import Authorization from 'components/Authorization';
import Main from 'components/Main';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path='/' element={<Authorization />} />
           <Route path='/main' element={<Main />} />
         </Routes>
    </BrowserRouter>

  );
}

export default App;
