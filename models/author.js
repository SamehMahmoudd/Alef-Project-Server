const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, 
{ timestamps: true });

const authorModel = mongoose.model('Author', authorSchema);

// authorModel.create({
//   name: 'alaaEllol=>auther',
//   books:['646117922fa6eaa228189305']
// });

module.exports = authorModel;