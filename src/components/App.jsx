import { useEffect, useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Options from "./Options/Options";

const App = () => {
  const [click, setClick] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(click));
  }, [click]);

  const updateFeedback = (feedbackType) => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1,
    });
  };

  const clickOnReset = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const options = Object.keys(click);

  const totalFeedback = click.good + click.neutral + click.bad;
  const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        options={options}
        updateFeedback={updateFeedback}
        clickOnReset={clickOnReset}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={click.good}
          neutral={click.neutral}
          bad={click.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification total={totalFeedback} />
      )}
    </>
  );
};

export default App;
