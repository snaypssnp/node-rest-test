'use strict';
const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// const id = '5905ad4a365afe6fd1db54a9';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })
//   .ca;
//
// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Id not found ')
//     }
//     console.log('Todo By Id', todo);
//   }).catch(err => console.log(err));


const id = '5904e25aa4a3b66d2515c5bc';

User.findById(id)
  .then((user) => {
    if (!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch((err) => {
    console.log(err);
  })




