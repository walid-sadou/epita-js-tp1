/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import {getState, setState} from "../store";

const remove = (url) => {
    const state = getState();
    const index = state.indexOf(url);
    if (index > -1){
        state.splice(index, 1);
        console.log(state);
    }
    return setState(state);
};

export default remove;
