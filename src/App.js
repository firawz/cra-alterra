import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import App from './pages/App';
import HalamanDua from './pages/HalamanDua';
import NotFound from './pages/NotFound';
import Pokemon from './pages/Pokemon';

const BasicExample = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Pokemon />
                </Route>
                <Route exact path="/calculator">
                    <HalamanDua />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default BasicExample;
