import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
import Home from './Pages/Home/Home';
import './Style/Dark.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './Contex/DarkModeContex';


const App = () => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark": "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
