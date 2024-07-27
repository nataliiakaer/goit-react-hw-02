import F from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={F.list}>
      <li className={F.item}>Good: {good}</li>
      <li className={F.item}>Neutral: {neutral}</li>
      <li className={F.item}>Bad: {bad}</li>
      <li className={F.item}>Total: {total}</li>
      <li className={F.item}>Positive: {positive}</li>
    </ul>
  );
};

export default Feedback;
