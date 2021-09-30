import React, { Component } from "react";
import FeedbackOptions from "./feedback/feedbackOptions/FeedbackOptions";
import Statistics from "./feedback/statistics/Statistics";
import Section from "./section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onBtnClick = (event) => {
    const name = event.target.name;
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };
  render() {
    return (
      <>
        <Section title="Leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onBtnClick={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
