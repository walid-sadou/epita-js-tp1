/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

import {getState, setState} from "../store";

const add = (...urls) => {
    let data = [];
    let state = getState;
    if (typeof urls === "object") {
        urls.forEach((url) => {
            data.push(url);
        })
    } else if (typeof urls === "string" && urls !== "") {
        data.push(urls);
    } else {
        console.error("Invalid input format");
    }
    console.log((state()));
    setState(state().concat(data));
    console.log("adding picture" , state());
};

export default add;
