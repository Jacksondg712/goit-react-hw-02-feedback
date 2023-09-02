import React from "react"
import { Component } from "react"
import FeedOption from "./feedback/FeedOption"
import FeedTitle from "./feedback/FeedTitle"
import  FeedStatistics  from "./feedback/FeedStatistics"
import Notification from "./Notification/Notification"
import "./feedback/FeedStyle.css"

export class App extends Component{
    state={
        good:0,
        neutral:0,
        bad:0
    };

    
    handleFeedback  = e =>{
      this.setState(prevState => ({
        [e]: prevState[e] + 1,
      }));
    };

    countTotalFeedback = () =>{
      const {good,neutral,bad} = this.state;
      return good+neutral+bad;
    }

    countPositiveFeedbackPercentage= () =>{
      const {good} = this.state;
      const {countTotalFeedback} = this
      return Math.round((good/countTotalFeedback())*100) + "%";
    }
    render() {

        const {good,neutral,bad} = this.state;
        const {handleFeedback,countTotalFeedback, countPositiveFeedbackPercentage} = this;
        console.log(good,neutral,bad);

        const totalFeedback = countTotalFeedback();
        const positiveFeedback = countPositiveFeedbackPercentage();

        return(
            <div className="containerFeed">
            <FeedTitle Title="Please leave feedback"/>
            <FeedOption onLeaveFeedback={handleFeedback}/>

            <FeedTitle Title="Statistics"/>
            {totalFeedback ? (
              <FeedStatistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positive={positiveFeedback} message="here is no feedback"/>
              ) : (
                <Notification Message="There is no feedback"/>
              )
            }
            </div>
        )
    }
}