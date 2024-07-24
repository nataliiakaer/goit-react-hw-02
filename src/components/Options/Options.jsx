const Options = ({ onGood, onNeutral, onBad }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={onGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </li>
      {}
      <li>
        <button>Reset</button>
      </li>
    </ul>
  );
};

export default Options;
