"use strict";


process.setMaxListeners(15);
class UserStorage{
    static #users= {
        id: ["sally", "admin", "seyeon"],
        psword: ["1234", "1111", "123456"],
        name: ["정세연", "어드민", "테스트"],
     }

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
    return newUsers;
    };

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUsers,info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});
        return userInfo;
    };
}

module.exports = UserStorage;
  
  