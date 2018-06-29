// regionCallback.js
import intCheck from "../exceptions/intCheck";
import regionCheck from "../exceptions/regionCheck";
import toLower from "../helpers/arrToLower";
import contains from "../helpers/arrContains";

export default (arg, lang, target, regions) => {
  intCheck(arg); // if arg is Int, then to be Exception

  // comparing language whether matching method and default
  if (lang.slice(0, 2) !== target) return false;

  if (arg !== undefined) {
    let local = lang.slice(3, 5);

    // if arg is array
    if (Array.isArray(arg)) {
      // local region '*-us', '*-ca' and so.
      let argument = toLower(arg);
      // if browser-lang has nsetting as 'en-us', 'zh-tw', 'de-de'
      if (local !== "") {
        // check invalid regions in array
        regionCheck(argument, regions, target);

        return contains(argument, local);
      }
      // if lang is plain like, 'en', 'zh', 'de'
      return true;
    } else {
      // if arg is string
      return arg.toLowerCase() === local ? true : false;
    } // ! Array.isArray
  }

  // if arg is empty
  return true;
};