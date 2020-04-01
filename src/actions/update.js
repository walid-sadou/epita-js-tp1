/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import {getState, setState} from "../store";

const update = (url, newUrl) => {
    const state = getState();
    const index = state.indexOf(url);
    if (index > -1){
        state.splice(index, 1, newUrl);
        console.log(state);
    }
    return setState(state);
};

export default update;
