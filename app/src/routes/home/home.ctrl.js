"use strict";

const { response } = require("express");
const User = require("../../models/User");

const output={
  home: (req,res)=>{
    res.render("home/index");
  },
 
  login:  (req,res)=>{
    res.render('home/login');
  },
};

const process={
  login: (req,res) => {
    const user = new User(req.body);
    const respnse = user.login();
    console.log(response);
  },
};

module.exports = {
  output,
  process, 
};

