import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/product/action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./singleproduct.css";
const SingleProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.products.product);
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
  return (
    <div className="singleProComponent">
      <div className="singleProNavigation">Home / Men / Product</div>
      <div className="singlePro">
        <div className="singleProGallery">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {image?.map((e) => {
              return (
                <SwiperSlide className="swipeImage">
                  <img src={e} alt="images" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="singleProDetails"></div>
      </div>
      <div className="singleProReviews"></div>
    </div>
  );
};

export default SingleProduct;
