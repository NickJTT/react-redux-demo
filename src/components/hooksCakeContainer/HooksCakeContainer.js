import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

export default function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <p>Number of cakes: { numberOfCakes }</p>
            <button onClick = { () => dispatch(buyCake()) }>Buy a cake</button>
        </React.Fragment>
    );
}
