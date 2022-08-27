import { Route, Switch } from 'react-router-dom';

import ContactScreen from '../../pages/contact-screen';
import HomeScreen from '../../pages/home-screen';
import MenuScreen from '../../pages/menu-screen';
import React from "react";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/menu'} component={MenuScreen} />
            
        </Switch>
    );
}

export default AppRouter;