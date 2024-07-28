import { ReactElement } from "react";
import { iconsList } from "src/constants/icons";

/**
 * Searches for an icon based on the given search string.
 *
 * @param searchString - A string containing one or more words to search for in the icon list.
 * @returns The matching icon as a ReactElement, or null if no match is found.
 */
export const getIconByName = (searchString: string): ReactElement | null => {
  // Normalize the search string to lowercase for case-insensitive comparison
  const words = searchString.toLowerCase().split(" ");

  // Iterate through the IconsList to find a matching name or key
  for (const item of iconsList) {
    if (
      words.includes(item.name) ||
      item.keys?.some((key) => words.includes(key))
    ) {
      return item.icon;
    }
  }

  // Return null or a default icon if no match is found
  return null;
};
