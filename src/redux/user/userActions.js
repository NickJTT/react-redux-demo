import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';
import UserService from '../../services/UserService';

export const fetchUsersRequest = () => {
    return { type: FETCH_USERS_REQUEST };
}

export const fetchUsersSuccess = users => {
    return { type: FETCH_USERS_SUCCESS, payload: users };
}

export const fetchUsersFailure = error => {
    return { type: FETCH_USERS_FAILURE, payload: error };
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        try {
            const fetchData = async() => {
                const users = await UserService.getUsers();
                dispatch(fetchUsersSuccess(users));
            }
            fetchData();
        } catch (exception) {
            dispatch(fetchUsersFailure(exception));
        }
    };
}
