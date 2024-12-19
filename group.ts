//imports
import { STYLES_KEY } from "./constants";
import { createKeys } from "./helpers";
import { typeSaveStyle, typeStoreStyles, typeUserInput } from "./types";

/**
 * function groupStyles:
 * creates a memo for the common styles from all the arrays
 * groups the styles in a store
 */
export function groupStyles(styles: typeUserInput) {
  //convert style strings to array
  const arr = styles.map((style) => style.split(" "));
  //each styles
  const store: typeStoreStyles = {};
  //common styles exist in all the arrays
  const memo: typeSaveStyle = {};

  //check for identical style groups
  //loop over all the styles
  for (let i = 0; i < arr.length; i++) {
    //loop over the current styles
    //create a key in the store for each styles array
    store[createKeys(STYLES_KEY, `${i}`)] = {};
    for (let j = 0; j < arr[i].length; j++) {
      const currentStyle = arr[i][j];
      //check for empty
      if (currentStyle) {
        //add all common styles to memo
        if (!memo[currentStyle]) {
          //check if curr exist in all arrays
          let doesExist = true;
          //loop over the arrays
          for (let k = 0; k < arr.length; k++) {
            //find the array in which the curr does not exist
            if (arr[k].indexOf(currentStyle) < 0) {
              doesExist = false;
              break;
            }
          }

          //if curr exists in all, add it to the memo
          if (doesExist) {
            memo[currentStyle] = currentStyle;
          }
        }

        store[createKeys(STYLES_KEY, `${i}`)][currentStyle] = currentStyle; //group one
      }
    }
  }

  return { memo, store };
}
