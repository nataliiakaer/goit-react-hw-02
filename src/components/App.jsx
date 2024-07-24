import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Options from "./Options/Options";

const App = () => {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedbackGood = () => {
    setClick({
      ...click,
      good: click.good + 1,
    });
  };

  const updateFeedbackNeutral = () => {
    setClick({
      ...click,
      neutral: click.neutral + 1,
    });
  };

  const updateFeedbackBad = () => {
    setClick({
      ...click,
      bad: click.bad + 1,
    });
  };

  const totalFeedback = click.good + click.neutral + click.bad;
  // const totalFeedback = good + neutral + bad;

  return (
    <>
      <Description />
      <Options
        onGood={updateFeedbackGood}
        onNeutral={updateFeedbackNeutral}
        onBad={updateFeedbackBad}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={click.good}
          neutral={click.neutral}
          bad={click.bad}
          total={totalFeedback}
        />
      ) : (
        <Notification total={totalFeedback}/>
      )}
    </>
  );
};

export default App;
