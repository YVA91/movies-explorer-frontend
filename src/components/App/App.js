import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import Register from '../Register/Register'
import { Route, Switch, BrowserRouter, useHistory, withRouter } from 'react-router-dom';

function App() {

return (
    <>
    <Header />
    <Switch>
    <Route exact path="/">
    <Main />
    </Route>
    <Route path="/movies">
        <Movies/>
    </Route>
    <Route path="/sign-up">
        <Register
            title="Регистрация"
            buttonText="Зарегистрироваться"
        />
    </Route>

    
    </Switch>




    <Footer />
    </>
)
}

export default App;
