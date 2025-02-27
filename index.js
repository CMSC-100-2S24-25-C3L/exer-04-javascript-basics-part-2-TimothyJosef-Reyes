import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import fs from 'fs';

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
    if(user_info.length != 4){
        return false;
    }

    if((typeof user_info[0] != "string" || user_info[0].length == 0) ||
    (typeof user_info[1] != "string" || user_info[1].length == 0) ||
    (typeof user_info[2] != "string" || user_info[2].length == 0) ||
    typeof user_info[3] != "number"){
        return false;
    }

    if(user_info[3] < 18){
        return false;
    }

    if(!validator.isEmail(user_info[2])){
        return false;
    }

    let uniqueID = generateUniqueID(user_info[0], user_info[1]);

    let user_text = user_info[0]+","+user_info[1]+","+user_info[2]+","+user_info[3]+","+uniqueID+"\n";

    fs.appendFile('users.txt', user_text, function (err) {
        if (err) throw err;
    });

    return true;
}

export { generateUniqueID, addAccount }