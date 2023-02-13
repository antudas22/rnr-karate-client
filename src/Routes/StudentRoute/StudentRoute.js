import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useStudent from '../../hooks/useStudent';
import Loading from '../../Pages/Shared/Loading/Loading';

const StudentRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isStudent, isStudentLoading] = useStudent(user?.email);
    const location = useLocation();

    if(loading || isStudentLoading){
        return <Loading />;
    }

    if(isStudent){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />;
};

export default StudentRoute;