import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../../redux';

const mapStateToProps = state => {
    return { userData: state.user };
}

const mapDispatchToProps = dispatch => {
    return { fetchUsers: () => dispatch(fetchUsers()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(function UserContainer({ userData, fetchUsers }) {
    useEffect(() => fetchUsers(), []);
    return userData.loading ? <h2>Loading</h2> : userData.error ? <h2>{ userData.error }</h2> :
    <React.Fragment>
        <h2>User List</h2>
        <React.Fragment>
            {
                userData && userData.users && userData.users.map(user => <p key = { user.id }>{ user.name }</p>)
            }
        </React.Fragment>
    </React.Fragment>;
});
