/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import {getState} from "../store";

const get = (elem) => {
    const state = getState();
    state.forEach((url) => {
        console.log(url);
        if (url === elem) {
            return url;
        }
    })
};

export default get;
