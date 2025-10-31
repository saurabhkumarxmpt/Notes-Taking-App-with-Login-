import {Routes,Route} from 'react-router-dom';
import Homepage from '../pages/home/HomePage';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayouts';
import LoginPage from '../pages/auth/Login';

const AppRoutes =()=>{
    return(
        <Routes>
            {/* public routes  */}
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Homepage/>} />
            </Route>

            {/* auth routes */}
            <Route element={<AuthLayout/>}>
                <Route path='/login' element={<LoginPage/>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;