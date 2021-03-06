import { CALL_API } from '../middleware/api';
import * as ActionTypes from './actionTypes';

export const list = query => dispatch => {
    return dispatch({
        data: query,
        [CALL_API]: {
            endpoint: 'gold/list',
            actionType: ActionTypes.WORKSPACE_LIST
        }
    });
};

export const card = query => dispatch => {
    if (query == 0) {
        return dispatch({
            data: {
                collateralType: 10
            },
            type: ActionTypes.WORKSPACE_CARD
        });
    }
    return dispatch({
        data: query,
        [CALL_API]: {
            endpoint: 'gold/card',
            actionType: ActionTypes.WORKSPACE_CARD
        }
    });
};

export const save = query => dispatch => {
    return dispatch({
        data: query,
        [CALL_API]: {
            endpoint: 'gold/save',
            actionType: ActionTypes.WORKSPACE_CARD
        }
    });
};

export const add = query => dispatch => {
    return dispatch({
        data: query,
        [CALL_API]: {
            endpoint: 'gold/save'
        }
    });
};

export const remove = query => dispatch => {
    return dispatch({
        data: query,
        [CALL_API]: {
            endpoint: 'gold/delete',
            actionType: ActionTypes.WORKSPACE_CARD
        }
    });
};