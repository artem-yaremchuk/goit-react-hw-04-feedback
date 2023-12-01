import { nanoid } from 'nanoid'
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
      <ul className={css.buttonList}>
        {options.map(option => (
          <li key={nanoid()}>
            <button onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
}

export default FeedbackOptions;
