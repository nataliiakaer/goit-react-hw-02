import clsx from "clsx";
import O from "./Options.module.css";

const Options = ({ options, updateFeedback, clickOnReset, totalFeedback }) => {
  return (
    <ul className={O.list}>
      {options.map((option) => {
        return (
          <li key={option} className={O.item}>
            <button
              className={clsx(O.btn, {
                [O.green]: option === "good",
                [O.blue]: option === "neutral",
                [O.red]: option === "bad",
              })}
              type="button"
              onClick={() => updateFeedback(`${option}`)}
            >
              {option}
            </button>
          </li>
        );
      })}
      
      {totalFeedback > 0 && (
        <li className={O.item}>
          <button className={O.btn} onClick={clickOnReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
