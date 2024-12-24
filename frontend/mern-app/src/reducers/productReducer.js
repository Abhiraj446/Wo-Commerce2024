import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstant.js";

const initialState = {
  products: [], // This is what we will use consistently
  loading: false,
  error: null,
  totalProduct: 0,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        products: [], 
      };

    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.product || [], // Default to an empty array if 'product' is undefined
        totalProduct: action.payload.totalProduct || 0, // Default to 0 if 'totalProduct' is undefined
        error: null,
      };

    case ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [], // Ensure products are cleared on error
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};