import * as _ from "lodash";
import { isEqual } from "lodash";

const arr = [1, 2, 3, 4, 5];
const arr2 = _.filter(arr, (n) => n < 4);

console.log(arr2);
