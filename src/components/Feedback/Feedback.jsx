import F from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total }) => {
  return (
    <ul className={F.list}>
      <li className={F.item}>Good: {good}</li>
      <li className={F.item}>Neutral: {neutral}</li>
      <li className={F.item}>Bad: {bad}</li>
      <li className={F.item}>Total: {total}</li>
      <li className={F.item}>Positive: </li>
    </ul>
  );
};

export default Feedback;
