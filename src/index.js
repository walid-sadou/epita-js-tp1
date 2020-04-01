// import list from "./actions/list";
// import add from "./actions/add";

import pictures from "./fixtures";
import {getState} from "./store";
import add from "./actions/add";
import remove from "./actions/remove";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const refreshGrid = () => {
// FIXME: use your functions to get all the elements
  const items = [];

  getState().forEach((picture) => {
    items.push(picture);
  });

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    fetch(i).then(res => {
      imgElement.src = res.url;
    });

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );
    const updateButtonElement = clone.querySelector(".picture-item-update-button");

    fragment.appendChild(clone);

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid();
    });
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

const addPictureHandler = () => {
  const url = getInputContents();
  add(url);
  clearInputContents();
  refreshGrid();
};

refreshGrid();
pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
