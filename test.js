import { generateUniqueID, addAccount } from './index.js'; // imports self made functions from index.js

console.log(addAccount(["Timothy", "Reyes", "tareyes1@gmail.com", 18])); // sample function calls to ensure to test exercise requirements
console.log(addAccount(["Josef", "Reyes", "jreyes1@gmail.com", 21]));
console.log(addAccount(["Paul", "Reyes", "preyes1@gmail.com", 17]));
console.log(addAccount(["Jose", "Conde", "jconde@gmail.com", 18]));
console.log(addAccount(["Magna", "Guacamole", 18]));
console.log(addAccount(["Sigma", "Reyes", "banana", 18]));
console.log(addAccount(["Sour", "Apple", "apple@gmail.com", "18"]));
console.log(addAccount(["Cinnamon", "Roll", "apple@gmail.com", "hi"]));
console.log(addAccount(["", "", "apple@gmail.com", 18]));
console.log(addAccount([1234, "Hi", "sigma@edu.ph", 18]));
