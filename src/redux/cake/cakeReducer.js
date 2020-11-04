import { BUY_CAKE } from './cakeTypes';

const initialState = {
    numberOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: {
            const numberOfCakes = state.numberOfCakes - action.payload;
            if (numberOfCakes >= 0) {
                return { ...state, numberOfCakes: numberOfCakes };
            } else {
                return state;
            }
        }
        default: {
            return state;
        }
    }
}

export default cakeReducer;
