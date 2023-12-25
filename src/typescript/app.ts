import obj from "./math";
import human from "./person";

const allin =function(){
const plus = obj.add(5, 5);
const minus = obj.subtract(5, 3);

console.log("plus:", plus);
console.log("minus:", minus);
console.log("Person:", human);

}
export default allin