//import components:
import Navbar from './Components/Outlay/Navbar';
import StatePage from './Components/Outlay/StatePage';
import ReducerPage from './Components/Outlay/ReducerPage';
import Footer from './Components/Outlay/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { bgStyle } from './Components/styles/Styles'

function App() {
  //write any js before return
  return (
    <Router>
      <div className={ bgStyle }>
        <Navbar />
        <div className="content flex justify-center items-center">
          {StatePage}
          <Routes>
            <Route path="/" element={ <StatePage/> }>
            </Route> 
            <Route path="/ReducerPage" element={ <ReducerPage/>}>
            </Route>
          </Routes>
        </div> 
        <Footer />   
      </div>
    </Router>
  );
}

export default App;
