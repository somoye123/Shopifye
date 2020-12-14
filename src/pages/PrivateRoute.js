import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = () => <h4>Private Route</h4>;
export default PrivateRoute;
