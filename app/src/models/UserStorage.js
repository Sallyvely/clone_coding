"use strict";

const fs = require("fs").promises;

process.setMaxListeners(15);
class UserStorage{
    static getUsers(...fields){
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
    return newUsers;
    }

    static getUserInfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) =>{
                return this.#getUserInfo(data, id);

            })
            .catch(console.error);
    };

    static #getUserInfo(data, id){
        const users = JSON.parse(data);       
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers,info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});
        return userInfo;
    }
    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        console.log(users);
    }
}

module.exports = UserStorage;
  
  