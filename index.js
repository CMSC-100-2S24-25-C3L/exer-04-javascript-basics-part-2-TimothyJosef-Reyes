import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

function generateUniqueID(first_name, last_name){
    if(typeof first_name != 'string' || typeof last_name != 'string'){
        first_name = String(first_name);
        last_name = String(last_name);
    }

    first_name = first_name.toLowerCase();
    last_name = last_name.toLowerCase();

    let uniqueID = "";
    let id = uuidv4();
    
    id = String(id).substr(0,8);
    
    uniqueID = uniqueID + first_name[0];
    uniqueID = uniqueID + last_name;
    uniqueID = uniqueID + id;

    return uniqueID;
}

function addAccount(user_info){
    if(user_info.lenght != 4){
        return false;
    }

}

console.log(generateUniqueID("Timothy", "Reyes"));
