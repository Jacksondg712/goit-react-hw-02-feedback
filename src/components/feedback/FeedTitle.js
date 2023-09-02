import proptypes from "prop-types"
import "./FeedStyle.css";


const FeedTitle = ({
    title
}) =>{
    return(
        <>
        <h3>{title}</h3>
        </>
    )
};

FeedTitle.prototype = {
    title:proptypes.string,
};

export default FeedTitle;

