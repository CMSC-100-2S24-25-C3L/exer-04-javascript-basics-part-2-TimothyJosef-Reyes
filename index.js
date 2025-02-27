import { v4 as uuidv4 } from 'uuid'; // necessary NPM libraries imported
import validator from 'validator';
import fs from 'fs';

function generateUniqueID(first_name, last_name){ // function that generates a uniqueID for the user based on their names and a randomly generated alpha-numeric code
    if(typeof first_name != 'string' || typeof last_name != 'string'){ // ensures that the inserted parameters are strings
        first_name = String(first_name);
        last_name = String(last_name);
    }

    first_name = first_name.toLowerCase(); // converts the first and last name into lowercase
    last_name = last_name.toLowerCase();

    let uniqueID = ""; // variable storage for uniqueID
    let id = uuidv4(); // generates random alphanumeric code
    
    id = String(id).substring(0,8); // only takes 8 from the generated code
    
    uniqueID = uniqueID + first_name[0] + last_name + id; // concatenates to form the final unique ID

    return uniqueID; // returns the final generated ID
}

function addAccount(user_info){ // function that add the user_info into users.txt and informs the user if it was successfully inserted
    if(user_info.length != 4){ // the array must have 4 elements
        return false;
    }

    if((typeof user_info[0] != "string" || user_info[0].length == 0) ||
    (typeof user_info[1] != "string" || user_info[1].length == 0) ||
    (typeof user_info[2] != "string" || user_info[2].length == 0) ||
    typeof user_info[3] != "number"){ // the first 3 elements must be strings, while the last is a number
        return false;
    }

    if(user_info[3] < 18){ // the age must be at least 18
        return false;
    }

    if(!validator.isEmail(user_info[2])){ // the third string element must be in email format
        return false;
    }

    let uniqueID = generateUniqueID(user_info[0], user_info[1]); // calls generateUniqueID 

    let user_text = user_info[0]+","+user_info[1]+","+user_info[2]+","+user_info[3]+","+uniqueID+"\n"; // full string to be uploaded to the users.txt

    fs.appendFile('users.txt', user_text, function (err) { // appends user_text in to the users.txt
        if (err) throw err;
    });

    return true; //returns true if parameters are valid
}

export { generateUniqueID, addAccount } // exports the functions within index.js