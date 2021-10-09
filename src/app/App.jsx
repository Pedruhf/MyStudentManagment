import './styles.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store';

import Header from "../components/Header";
import MainContent from "../views/MainContent/index";
import StudentsList from '../views/StudentsList';
import ClassesList from '../views/ClassesList';
import Footer from "../components/Footer";
import ErrorPage from '../views/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/" component={MainContent} exact />
          <Route path="/seus-alunos" component={StudentsList} />
          <Route path="/suas-turmas" component={ClassesList} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Provider>
      </div>
    </Router>
  );
}

export default App;
