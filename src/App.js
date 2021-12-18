import './CSSFiles/signInCSS.css';
import './CSSFiles/dashboard.css';
import './CSSFiles/registration.css';
import './CSSFiles/saisieClient.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from'react-router-dom';
import SignIn from './Component/SignIn';
import Registration from './Component/Registration';
import SaisieClient from './Component/SaisieClient';
import Content from './Component/Content';
import ClientList from './Component/ClientList';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact={true} path="/" element={<SignIn/>}/>
       <Route path="/dashboard/content" element={<Content/>}/>
        <Route path="/dashboard/saisieclient" element={<SaisieClient/>}/>
        <Route path="/dashboard/listeclient"  element={<ClientList/>}/>
        <Route path="/Registration" element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
