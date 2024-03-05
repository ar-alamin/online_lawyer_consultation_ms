/* eslint-disable react/prop-types */
import FeedbackForm from "./FeedbackForm";
import avatar from "../../assets/images/avatar-icon.png";
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";

const Feedback = ({ reviews, totalRating }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] text-headingColor font-bold mb-[30px]">
          All Reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img src={review.user.photo} alt="Ph" className="w-full" />
              </figure>
              <div>
                <h5 className="text-[16px] leading-6 text-[#0067FF] font-bold">
                  {review.user.name}
                </h5>
                <p className="text-[14px] text-textColor leading-[22px]">
                  {formatDate(review.createdAt)}
                </p>
                <h6 className="text__para mt-3 text-[15px] font-medium">
                  {review.reviewText}
                </h6>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(review.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {/* ========== tour reviews section end =========== */}

      {showForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
