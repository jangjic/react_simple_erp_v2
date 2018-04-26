import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ManageGroup, ManagePerson, ManageId } from 'pages';
import { Header, Footer } from 'component';
import { Container } from 'semantic-ui-react';

class App extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/managegroup" component={ManageGroup}/>
                    <Route path="/manageperson" component={ManagePerson}/>
                    <Route path="/manageid" component={ManageId}/>
                </Switch>
                <Footer/>
            </Container>
        );
    }
}

export default App;