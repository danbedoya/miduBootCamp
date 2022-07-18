import React, { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
        {value}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  console.log(good, neutral, bad);
  const calculatePointsAverage = (good, neutral, bad) => {
    const points = {
      good: 1,
      neutral: 0,
      bad: -1,
    };
    let average =
      (good * points.good + neutral * points.neutral + bad * points.bad) /
      all(good, neutral, bad);
    return average;
  };

  const all = (good, neutral, bad) => {
    let sum = good + neutral + bad;
    return sum;
  };

  const percentageOfPositive = (good, neutral, bad) => {
    let percentage = (good / all(good, neutral, bad)) * 100;
    return percentage;
  };

  return (
    <table>
      <tbody>
        <Statistic text={"good"} value={good} />
        <Statistic text={"neutral"} value={neutral} />
        <Statistic text={"bad"} value={bad} />

        <tr>
          <td>all {all(good, bad, neutral)}</td>
        </tr>
        <tr>
          <td>
            Average{" "}
            {isNaN(calculatePointsAverage(good, bad, neutral))
              ? 0
              : calculatePointsAverage(good, bad, neutral)}
          </td>
        </tr>
        <tr>
          <td>
            Percentage{" "}
            {isNaN(percentageOfPositive(good, bad, neutral))
              ? 0
              : percentageOfPositive(good, bad, neutral)}{" "}
            %
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const App2 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let isThereAnyStatistic = good === 0 && neutral === 0 && bad === 0;

  console.log(isThereAnyStatistic);
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />
      <h1>Statistics</h1>
      {!isThereAnyStatistic ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        "No Feedback given"
      )}
    </div>
  );
};

export default App2;
