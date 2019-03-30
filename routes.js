'use strict';

var express = require('express');
var router = express.Router();

//GET /questions
// Route for questions collection
router.get('/', function(req, res) {
  res.json({
    response: "You sent me a GET request to /questions"
  });
});

//POST /questions
// Route for creating questions
router.post('/', function(req, res) {
  res.json({
    response: "You sent me a POST request to /questions",
    body: req.body
  });
});

//GET /questions/:qID
// Route for specific questions
router.get('/:qID', function(req, res) {
  res.json({
    response: "You sent me a GET request to questions for ID " + req.params.id
  });
});



//POST /questions/:qID/answers
// Route for creating answers
router.post('/:qID/answers', function(req, res) {
  res.json({
    response: "You sent me a POST request to /answers",
    questionID: req.params.qID,
    body: req.body
  });
});

//PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:qID/answers/:aID', function(req, res) {
  res.json({
    response: "You sent me a PUT request to /answers",
    questionID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
  });
});

//DELETE /questions/:qID/answers/:aID
// DELETE a specific answer
router.delete('/:qID/answers/:aID', function(req, res) {
  res.json({
    response: "You sent me a DELETE request to /answers",
    questionID: req.params.qID,
    answerID: req.params.aID
  });
});

//POST /questions/:qID/answers/:aID/vote-up
//POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res) {
  res.json({
    response: "You sent me a POST request to /vote-" + req.params.dir,
    questionId: req.params.qID,
    answerID: req.params.aID,
    vote: req.params.dir
  });
});

module.exports = router;
