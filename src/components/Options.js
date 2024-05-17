export default function Option({ question, answer, dispatch }) {
  const hasAnswer = answer !== null;
  return (
    <>
      {question.options.map((opt, ind) => {
        return (
          <button
            className={`btn btn-option ${ind === answer ? "answer" : ""} ${
              hasAnswer
                ? question.correctOption === ind
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={opt}
            onClick={() => dispatch({ type: "newAnswer", payload: ind })}
            disabled={hasAnswer}
          >
            {opt}
          </button>
        );
      })}
    </>
  );
}
