//get json data (ver2)
import data from './dummy.json'assert { type: 'json' };
//const array as ref from json
const SaabCaught = data;
let SaabCaughtAlt = SaabCaught;
//full display:
console.log(SaabCaught);
//full display:
console.log("# in Collection = ", SaabCaught.length - 1);

export default SaabCaught;