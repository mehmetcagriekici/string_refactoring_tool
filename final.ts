//imports
import { STYLES_KEY } from "./constants";
import { createKeys } from "./helpers";
import { typeStoreStyles, typeUserInput } from "./types";

/**
 * function finalStyles
 * takes the original styles, mostCommonStyle, and restStyles
 * returns a new array from the original styles with new reduced styles for each element of the styles array
 */

export function finalStyles(
  originalStyles: typeUserInput,
  mostCommonStyle: string,
  restStyles: typeStoreStyles,
  common: string
) {
  const reducedStyles = originalStyles.map(
    (_, i) =>
      `${common} ${Object.values(
        restStyles[createKeys(STYLES_KEY, `${i}`)]
      ).join(" ")}`
  );

  return { result: reducedStyles, common: mostCommonStyle };
}
