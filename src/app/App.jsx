import './styles.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

import Header from "../components/Header";
import MainContent from "../views/MainContent/index";
import StudentsList from '../views/StudentsList';
import Footer from "../components/Footer";
import ErrorPage from '../views/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={MainContent} exact />
          <Route path="/seus-alunos" component={StudentsList} exact />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
