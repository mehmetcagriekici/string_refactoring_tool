//imports
import { finalStyles } from "./final";
import { groupStyles } from "./group";
import { orgStyles } from "./org";
import { typeUserInput } from "./types";

/**
 * function refactor: main
 * returns an array with refactored strings
 * use args instead of a single array input (styles)
 */
function refactor(styles: typeUserInput) {
  //second step: group and create memo
  //memo -> all styles deduplicated
  //store -> all styles in groups
  const { memo, store } = groupStyles(styles);

  //third step: get the most common style, and the rest of the styles
  const { mostCommonStyle, restStyles } = orgStyles(memo, store);

  //final step: create final styles with the mostCommonStyle and the restStyles
  //return them in an array,
  const { result, common } = finalStyles(
    styles,
    mostCommonStyle,
    restStyles,
    "common"
  );

  //create a new variable with the common, change word "common" with that variable
  return { result, common };
}

//v0 early use

const test_groupStyles = [];

console.log(refactor(test_groupStyles));
