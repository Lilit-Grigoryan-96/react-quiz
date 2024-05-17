export default function Progressbar({
  index,
  questionsNum,
  points,
  maxPoints,
}) {
  return (
    <header>
      <progress max={questionsNum} value={index + 1} />
      <p>
        Question <strong>{index + 1}</strong>/{questionsNum}
      </p>
      <p>
        Points {points}/{maxPoints}
      </p>
    </header>
  );
}
