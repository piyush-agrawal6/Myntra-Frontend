import React from "react";
import "./Product.css";
import { Select } from "antd";
import ProComp from "../../Components/product/ProComp";

const Product = () => {
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
  const sizeOptions = [
    {
      label: "XL",
      value: "discount",
    },
    {
      label: "SM",
      value: "rating",
    },
    {
      label: "MD",
      value: "asc",
    },
    {
      label: "XS",
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
          Products - <span>133536 items</span>
        </p>
        <div className="proSort">
          <p>FILTERS</p>
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
            <br />
            <Select
              mode="multiple"
              size="large"
              placeholder="Please Select Size"
              style={{
                width: 250,
                border: "1px solid gray",
                color: "black",
                borderRadius: "8px",
                outline: "none",
              }}
              options={sizeOptions}
            />
          </div>
        </div>
      </div>
      <div className="proBox">
        <div className="proFilters">
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
        </div>
        <div className="proGrid">
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
          <ProComp />
        </div>
      </div>
    </div>
  );
};

export default Product;
