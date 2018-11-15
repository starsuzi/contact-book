/*
var express  = require("express");
var router   = express.Router();
var Contact  = require("../models/Contact");

// Index
router.get("/", function(req, res){
  Contact.find({}, function(err, contacts){
    if(err) return res.json(err);
    res.render("contacts/index", {contacts:contacts});
  });
});

// New
router.get("/new", function(req, res){
  res.render("contacts/new");
});

// create
router.post("/", function(req, res){
  Contact.create(req.body, function(err, contact){
    if(err) return res.json(err);
    res.redirect("/contacts");
  });
});

// show
router.get("/:id", function(req, res){
  Contact.findOne({_id:req.params.id}, function(err, contact){
    if(err) return res.json(err);
    res.render("contacts/show", {contact:contact});
  });
});

// edit
router.get("/:id/edit", function(req, res){
  Contact.findOne({_id:req.params.id}, function(err, contact){
    if(err) return res.json(err);
    res.render("contacts/edit", {contact:contact});
  });
});

// update
router.put("/:id", function(req, res){
  Contact.findOneAndUpdate({_id:req.params.id}, req.body, function(err, contact){
    if(err) return res.json(err);
    res.redirect("/contacts/"+req.params.id);
  });
});

// destroy
router.delete("/:id", function(req, res){
  Contact.remove({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect("/contacts");
  });
});

module.exports = router;
*/
var express = require("express");
var router = express.Router();
var Contact = require("../models/Contact");

//Index
router.get("/", function(req, res){
  Contact.find({}, function (err, contacts) { //contacts는 검색결과
    if(err) return res.json(err);
    // console.log(contacts);
    res.render("contacts/index", {contacts:contacts});

  });
});

//New
router.get("/new", function(req, res){
  res.render("contacts/new");
});

//create
router.post("/", function(req, res){
  Contact.create(req.body, function(err,contact){
    if(err) return res.json(err);
    res.redirect("/contacts");
  });
});

//show
router.get("/:id", function(req, res){
  console.log(req.params.id);
  console.log(req.params._id);
  Contact.findOne({_id:req.params.id}, function(err, contact){
    if(err) return res.json(err);
    if (contact === null)
      res.redirect("/contacts");
    res.render("contacts/show", {contact:contact});
  });
});

//edit
router.get("/:id/edit",function(req, res){
  //{_id:req.param.id}는 조건으로 쓰고 있다.
  //DB의 contacts collection에서 _id가 req.param.id와 같은 경우가 조건
  Contact.findOne({_id:req.params.id}, function(err, contact){
    if(err) return res.json(err);
    res.render("contacts/edit", {contact:contact});
  });
});

//update
router.put("/:id/update", function(res,req){
  //첫번째 parameter는 찾을 조건을 object로 입력
  //두번째 parameter는 update할 정보를 object로 입력 data를 찾는다
  //찾은 후 callback함수 호출
  console.log(req.body);
  Contact.findOneAndUpdate({_id:req.params.id},req.body, function(err, contact){
    if(err) return res.json;
    res.redirect("/contacts/"+req.params.id);
  });
});

//destroy
router.delete("/:id", function(req, res){
  Contact.remove({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect("/contacts");
  });
});

module.exports = router;