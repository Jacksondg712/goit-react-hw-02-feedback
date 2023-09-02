import "./FeedStyle.css";

const FeedOption = ({
    onLeaveFeedback
}) => {
    return(
        <div>
         <button className="optionButton" onClick={() => onLeaveFeedback("good")}>good</button>    
         <button className="optionButton" onClick={() => onLeaveFeedback("neutral")}>neutral</button>
         <button className="optionButton" onClick={() => onLeaveFeedback("bad")}>bad</button>
        </div>
    )
};

export default FeedOption;