const reviewModel = require('../models/review');

// //* desc   Get all reviews
// //* route  GET /product/:id/review

function addReviews(review) {
    return reviewModel.create(review);
}

async function getAllReviews() {
    return reviewModel.find();
}
  
function getAllReviewsForBook(id){
    return reviewModel.find({id});
}
function deleteReviews(id) {
    return reviewModel.deleteOne({ _id: id });
}
  

module.exports = { getAllReviews, addReviews, getAllReviewsForBook ,deleteReviews };