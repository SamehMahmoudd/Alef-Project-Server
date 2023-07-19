const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  addReviews,
  getAllReviewsForBook,
  deleteReviews,
} = require("../Controllers/reviewController");

////////////////////////ADD New Reviews////////////////////////
router.post("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let review = {
      productId: id,
      rating: req.body.rating,
      comment: req.body.comment,
    };
    let addReview = await addReviews(review);
    res.json(addReview);
  } catch (err) {
    res.send(err);
  }
});
////////////////////////GET ALL Reviews////////////////////////
router.get("/", async (req, res) => {
  console.log("fetching reviews");
  try {
    let allReviews = await getAllReviews();
    res.json(allReviews);
  } catch (err) {
    res.send(err);
  }
});
////////////////////////GET ALL Reviews for Book////////////////////////
router.get("/booksreviews/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Product Id", id);
  try {
    let bookReviews = await getAllReviewsForBook(id);
    res.json(bookReviews);
  } catch (err) {
    res.send(err);
  }
});
////////////////////////Delete Reviews BY ID////////////////////////
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let deleted = await deleteReviews(id);
    res.json(deleted);
  } catch (err) {
    res.send(err);
  }
});

// app.post("/review", async (req, res) => {
//     try {
//         const { comment, productId } = req.body;
//         const user = await User.findById({ _id: req.user.id });
//         const review = {
//             user: req.user.id,
//             name: user.username,
//             comment
//         };

//         const product = await Product.findById(productId);

//         product.review = product.review.filter(rev => rev.user !== user._id); //🟥 removes the current review if there is one

//         product.review.push(review);
//         await product.save();
//         res.status(200).json(product);
//     }
//     catch {
//         res.status(500).json("Problem");
//     }
// });

/////////////////////////////////////////////////
// const getAllReviews = async (req, res) => {
//     try {
//       const product = await Product.findById(req.params.id);
//       const reviews = product.reviews;
//       return res.status(200).json({
//         success: true,
//         reviews,
//       });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({
//         success: false,
//         message: "Internal server error",
//       });
//     }
//   };

module.exports = router;
