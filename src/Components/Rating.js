import React from "react";

const Rating = ({ rating, numRevies }) => {
  return (
    <div class="rating">
      <span>
        <i
          class={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fas fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          class={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fas fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          class={
            rating >= 2
              ? "fa fa-star"
              : rating >= 1.5
              ? "fas fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          class={
            rating >= 3
              ? "fa fa-star"
              : rating >= 2.5
              ? "fas fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          class={
            rating >= 4
              ? "fa fa-star"
              : rating >= 3.5
              ? "fas fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          class={
            rating >= 5
              ? "fa fa-star"
              : rating >= 4.5
              ? "fas fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
