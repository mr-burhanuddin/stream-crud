import {SIGN_IN, SIGN_OUT} from '../actions/types'

const INTAIL_STATE = {
    isSignedIn: null,
    userId: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INTAIL_STATE , action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};