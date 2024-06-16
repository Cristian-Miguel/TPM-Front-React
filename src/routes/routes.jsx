import { Route, Routes } from 'react-router-dom';

import AccountSetting from '../pages/account_settings';
import Chat from '../pages/chat';
import Home from '../pages/home';
import Favorites from '../pages/favorites';
import InfoProduct from '../pages/info_product';
import Message from '../pages/messages';
import Payment from '../pages/payment';
import Products from '../pages/products';
import Reservation from '../pages/reservation';
import SignUp from '../pages/sign_up';
import SignIn from '../pages/sign_in';

import PrivateRoute from './private_route';
import PublicRoute from './public_route'

const RootRoutes = () => {
    return (
        <>
            <Routes>

                <Route exact path='/'       element={ <Home/> } />
                <Route path='/products'     element={ <Products/> } />
                <Route path='/info_product' element={ <InfoProduct/> } />
                <Route path='/payment'      element={ <Payment/> } />
                <Route path='/reservation'  element={ <Reservation/> } />

                <Route path='/signup'       element={ <PublicRoute> <SignUp/> </PublicRoute> } />
                <Route path='/signin'       element={ <PublicRoute> <SignIn/> </PublicRoute> } />

                <Route path='/account_setting'  element={ <PrivateRoute> <AccountSetting/> </PrivateRoute> } />
                <Route path='/chat'             element={ <PrivateRoute> <Chat/> </PrivateRoute> } />
                <Route path='/message'          element={ <PrivateRoute> <Message/> </PrivateRoute> } />
                <Route path='/favorite'         element={ <PrivateRoute> <Favorites></Favorites> </PrivateRoute> } />
                <Route path='/reservation:id'   element={ <PrivateRoute> <Reservation/> </PrivateRoute> } />
            
            </Routes>
        </>
    );
}

export default RootRoutes;

