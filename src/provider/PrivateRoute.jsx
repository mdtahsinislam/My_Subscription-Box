// import React, { use } from 'react';
// import { AuthContext } from './AuthProvider';
// import { Navigate, useLocation } from 'react-router';
// import Loading from '../components/Loading';

// const PrivateRoute = ({children}) => {
//     const {user,loading}=use(AuthContext);
//     //console.log(user);

//     const location=useLocation();
//     console.log(location);

// if (loading){
//     return <Loading></Loading>; /////////loadingg
// }


// if (user && user?.email){
// return children;
// }

// return <Navigate state={location.pathname} to="/auth/login"></Navigate>

    
// };

// export default PrivateRoute;












import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate to="/auth/login" state={location.pathname} replace />;
};

export default PrivateRoute;