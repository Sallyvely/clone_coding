"use strict";

const UserStorage = require("./UserStorage");
class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client =this.body;
        const {id, psword} = UserStorage.getUserInfo(client.id);
        if(id){        
            if ( id===client.id && psword === client.psword){
                return { success: true}; 
            }
            return{success: false, msg: "login failed"};
        }
        return { success: false, msg:"failed"};
    }    
    register(){
        const client = this.body;
        UserStorage.save(client);
    }
}

module.exports=User;