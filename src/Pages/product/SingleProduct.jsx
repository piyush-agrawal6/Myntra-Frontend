import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/product/action";

const SingleProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.products.product)
  let image = [];
  if (data) {
    for (let key in data.images) {
      image.push(data.images[key]);
    }
  }
  console.log(image);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
