/* Chinese */
import detect from "../../helpers/detectLang";
import callback from "../../callback/regionCallback";

/**
 * hk : Hong Kong
 * cn : Simplified
 * tw : Traditional
 */
let chRegions = ["hk", "cn", "tw"];

export default arg => callback(arg, detect(), "zh", chRegions);
