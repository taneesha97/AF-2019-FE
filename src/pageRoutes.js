import React, { Component } from 'react';
import Navbar from './components/navBar/navBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateRoom from "./components/createRoom/createRoom";
import CreateCategory from "./components/createCategory/createCategory";
import Category from "./page/Category/category";
import Rooms from "./page/Room/rooms";

class PageRoutes extends Component{

    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <section>
                        <Switch>
                            <Route path="/create/room" component={CreateRoom}/>
                            <Route path="/create/category" component={CreateCategory}/>
                            <Route path="/:id" component={Rooms} />
                            <Route path="/" component={Category} exact/>
                        </Switch>
                    </section>
                </Router>
            </div>
        );


    }

}

export default PageRoutes;