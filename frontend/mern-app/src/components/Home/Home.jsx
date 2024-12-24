import { useEffect } from "react";
import "./home.css";
import Product from "./Product";  // Ensure this component is set up correctly
import { getProduct } from "../../action/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/loader.jsx";

const Home = () => {
  const dispatch = useDispatch();
  
  // Get products and loading state from Redux store
  const { products, loading } = useSelector((state) => state.products);

  // Dispatch action to fetch products when the component mounts
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log("components", products.images)

  return (
    <div className="home">
      {/* Show Loader only when loading is true */}
      {loading ? (
        <Loader />
      ) : (
        <div className="product-list">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;


