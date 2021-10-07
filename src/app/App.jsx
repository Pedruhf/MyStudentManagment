import './styles.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

import Header from "../components/Header";
import MainContent from "../components/MainContent/index";
import Footer from "../components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={MainContent} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
