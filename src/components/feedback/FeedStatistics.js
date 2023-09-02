import React from "react";
import "./FeedStyle.css";
import propTypes from "prop-types";


const FeedStatistics = ({
    good,
    neutral,
    bad,
    positive,
    total,
 }) => {
    return (
        <div>
            <h4>Statistics</h4>

                <>
                <ul className="listFeed">
                <li className="listStaticst">Good: {good} </li>
                <li className="listStaticst">Neutral: {neutral}</li>
                <li className="listStaticst">Bad: {bad}</li>
                <li className="listStaticst">Total: {total}</li>
                <li className="listStaticst">Positive feedback: {positive}</li>
                </ul>
                </>

        </div>
    )
 };


 FeedStatistics.propTypes={
    good:propTypes.node,
    neutral:propTypes.node,
    bad:propTypes.node,
    positive:propTypes.node,
    total:propTypes.node,
 };


 export default FeedStatistics;