/* Italian */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * it : Italy
 * ch : Switzerland
 */
let itRegions = ["it", "ch"];

export default arg => {
  return callback(arg, detect(), "it", itRegions);
};
