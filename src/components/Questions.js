import Option from "./Options";
export default function Questions({ question, answer, dispatch }) {
  return (
    <div className="options">
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
