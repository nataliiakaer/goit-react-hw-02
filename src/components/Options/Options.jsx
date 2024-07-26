import O from "./Options.module.css";

const Options = ({ onGood, onNeutral, onBad }) => {
  return (
    <ul className={O.list}>
      <li className={O.item}>
        <button
          className={`${O.btn} ${O.green}`}
          type="button"
          onClick={onGood}
        >
          Good
        </button>
      </li>
      <li className={O.item}>
        <button className={`${O.btn} ${O.blue}`} type="button" onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li className={O.item}>
        <button className={`${O.btn} ${O.red}`} type="button" onClick={onBad}>
          Bad
        </button>
      </li>
      {}
      <li className={O.item}>
        <button className={O.btn}>Reset</button>
      </li>
    </ul>
  );
};

export default Options;
