import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { isAuthUser } from "../helpers/auth";

import { useDispatch, useSelector } from "react-redux";
//import { getUserProfile } from "../store/user";

import { connect } from "react-redux";
import { fetchCurrentUser } from "../store";

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    
  }
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.data);
	const history = useHistory();
	useEffect(() => {
		if (isAuthUser()) {
			console.log(rest.path);
			if (rest.path === "/") {
				dispatch(fetchCurrentUser());
			}
		}
	}, []);
	return (
		<Route
			{...rest}
			render={(props) =>
				true ? (
					<Component {...props} />
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
