import logo from './logo.svg';
import './App.css';
import Employees from './page/Employees';
import SideMenu from './SideMenu';
import { create } from 'istanbul-reports';


function App() {
  return (
    <div>
      <SideMenu />
      <Employees />
    </div>
  );
}

export default App;
