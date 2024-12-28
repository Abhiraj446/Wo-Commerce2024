import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail } from '../../../action/productAction';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'; // Import useParams to extract URL parameters
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from the URL using useParams
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails || {});

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id)); // Dispatch action to get product details based on ID
    }
  }, [dispatch, id]); // Dependency array ensures it runs when `id` or `dispatch` changes

  // Handling loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Fragment>
      <Helmet title="PRODUCT-DETAIL-PAGE" />

      <div className="product-detail-page-layout">
        <div className="page-layout-1">
          {/* Dynamically displaying product image */}
          {product && (
            <img 
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg" alt="img"
              style={{ height: 'auto', width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
          )}
        </div>
        <div className="page-layout-2">
      {product ? (
    <div className="product-info">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      
      {/* Display category */}
      <div className="category">
        <strong>Category:</strong> {product.category}
      </div>

      {/* Display product rating */}
      <div className="rating">
        <strong>Rating:</strong> {product.rating} ({product.numberOfReviews} reviews)
      </div>

      {/* Display stock availability */}
      <div className="stock">
        <strong>In Stock:</strong> {product.stock}
      </div>

      {/* Display price */}
      <div className="price">
        <strong>${product.price}</strong>
      </div>

      {/* Button to add product to cart */}
      <button className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  ) : (
    <div>No product details available</div>
  )}
</div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;

  