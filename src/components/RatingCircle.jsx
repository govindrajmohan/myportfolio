import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const RatingCircle = ({ rating }) => {
   
    return (
        
            <CircularProgressbar className="rating-circle"
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "black" : rating < 7 ? "#ffdb00" : "#07cb07",
                })}
            />
      
    );
};

export default RatingCircle;
