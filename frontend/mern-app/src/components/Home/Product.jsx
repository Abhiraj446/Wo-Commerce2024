// import React from "react";
// import {Link} from "react-router-dom"
// // import {Rating} from "react-rating-stars-component"
// import ReactStars from "react-rating-stars-component";

// const Product = ({ product }) => {

// //   const rating ={
// //     value: product.ratings,
// //     readOnly: true,
// //     precision: 0.5
// //   }
// const ratingChanged = (newRating) => {
//   console.log(newRating);
// };
 

//   return (
//     <Link classname="product-card" to={`/product/${product._id}`}>
//       <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg" height={"120vh"} width={"10%"} alt="img"/>
//       <p>{product.name}</p>
//       <div>
//         {/* <Rating {...rating}/> */}
//         <ReactStars
//         count={5}
//         onChange={ratingChanged}
//         size={24}
//         activeColor="#ffd700"
//       />,
//       <span>
//         ({product.numberOfReviews} Reviews)
//       </span>
//       </div>
//       <span>
//         ${product.price}
//       </span>
//     </Link>
//   );
// };

// export default Product;





























import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const rating ={
    value: product.ratings,
    readOnly: true,
    precision: 0.5
    }

  return (
    <Link className="product-card" to={`/product/${product._id}`}>
      <img
        src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg"
        height="200px"  // Set a fixed height (for example, 200px)
        width="auto"    // Maintain aspect ratio by setting width to auto
        alt="img"
      />
      <p>{product.name}</p>
      <div>
        <ReactStars {...rating}/>
        <span>({product.numberOfReviews} Reviews)</span>
      </div>
      <span>${product.price}</span>
    </Link>
  );
};

export default Product;
