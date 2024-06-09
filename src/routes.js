import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/sign_up';
import SignIn from './pages/sign_in';
import Account_Setting from './pages/account_settings';
import Chat from './pages/chat';
import Favorites from './pages/favorites';
import Info_Product from './pages/info_product';
import Message from './pages/messages';
import Payment from './pages/payment';
import Products from './pages/products';
import Reservation from './pages/reservation';

const Routes = () => {
    <Switch>
        <Route exact path='/' Component={Home} />
        <Route path='/products' Component={Products} />
        <Route path='/info_product' Component={Info_Product} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/signin' Component={SignIn} />
        <Route path='/account_setting' Component={Account_Setting} />
        <Route path='/chat' Component={Chat} />
        <Route path='/message' Component={Message} />
        <Route path='/favorite' Component={Favorites} />
        <Route path='/payment' Component={Payment} />
        <Route path='/reservation' Component={Reservation} />
    </Switch>
}

export default Routes;