//imports
import { typeSaveStyle, typeStoreStyles } from "./types";

/**
 * function orgStyles
 * takes memo and store
 * re-organizes the store using memo
 * creates the most_common_style_str string from the orginized store
 */
export function orgStyles(memo: typeSaveStyle, store: typeStoreStyles) {
  const mostCommonStyle: string[] = [];

  //to mutate, and final result
  const restStyles: typeStoreStyles = {};
  //loop over the store
  for (const [stylesKey, current] of Object.entries(store)) {
    restStyles[stylesKey] = {};
    //loop over the current store
    //key and value are identical
    for (const [key, value] of Object.entries(current)) {
      //check if the key exists in the memo
      if (memo[key]) {
        //add it to the mostCommonStyle
        if (mostCommonStyle.indexOf(value) < 0) {
          mostCommonStyle.push(value);
        }
      } else {
        //if the style is not common, add it to the restStyles
        restStyles[stylesKey][key] = value;
      }
    }
  }

  return { mostCommonStyle: mostCommonStyle.join(" "), restStyles };
}
