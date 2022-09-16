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
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers,info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});
        return userInfo;
    };

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        console.log(users);
    }
}

module.exports = UserStorage;
  
  