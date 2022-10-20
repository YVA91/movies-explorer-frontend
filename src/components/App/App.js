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
    <Footer />
    </Route>
    <Route path="/movies">
        <Movies/>
        <Footer />
    </Route>
    <Route path="/signup">
        <Register
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
        />
    </Route>

    
    </Switch>
    </>
)
}

export default App;
