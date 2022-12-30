import React, { useEffect } from "react";
import "./Product.css";
import { Select } from "antd";
import ProComp from "../../Components/product/ProComp";
import { getProduct } from "../../Redux/product/action";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
import { useParams } from "react-router-dom";
const Product = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const {
    pro_loading,
    products: { data },
  } = useSelector((store) => store.products);
  // console.log(pro_error, pro_loading, data);
  useEffect(() => {
    if (keyword) {
      dispatch(getProduct(keyword));
    } else {
      dispatch(getProduct(" "));
    }
  }, [dispatch, keyword]);

  const sortOptions = [
    {
      label: "Better Discount",
      value: "discount",
    },
    {
      label: "Customer Ratings",
      value: "rating",
    },
    {
      label: "Price low to high",
      value: "asc",
    },
    {
      label: "Price high to low",
      value: "desc",
    },
  ];
  return (
    <div className="productCon">
      <div className="proContainer">
        <p className="proNavigation">
          <span>Home /</span> Men
        </p>
        <p className="proCount">
          Products - <span>{data?.productLength} items</span>
        </p>
        <div className="proSort">
          <div>
            <Select
              size="large"
              placeholder="Sort By"
              style={{
                width: 200,
                border: "1px solid gray",
                color: "black",
                borderRadius: "8px",
                outline: "none",
              }}
              options={sortOptions}
            />
          </div>
        </div>
      </div>
      <div className="proBox">
        <div className="proFilters"></div>
        {pro_loading ? (
          <div className="proGrid">
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
          </div>
        ) : (
          <div className="proGrid">
            {data &&
              data.products.map((pro, i) => {
                return <ProComp product={pro} key={i} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
