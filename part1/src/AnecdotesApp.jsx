import React from "react";
import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      {text} has {votes} votes
    </div>
  );
};

const AnecdotesApp = ({ anecdotes }) => {
  const points = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  const [selected, setSelected] = useState(0);
  const [newPoints, setPoints] = useState(points);

  console.log(newPoints);

  const getRandomPosition = (anecdotes) => {
    let randomPosition = Math.floor(Math.random() * anecdotes.length);
    console.log(randomPosition);
    return randomPosition;
  };

  const incrementPoints = () => {
    let copyPointsToReturn = { ...newPoints };
    copyPointsToReturn[selected] += 1;
    setPoints(copyPointsToReturn);
  };

  const maxValue = (points) => {
    let max = Math.max(...Object.values(points));
    let maxKey = Object.entries(points).find(([key, value]) =>
      value === max ? key : null
    );
    return maxKey;
  };
  //const max = Math.max(...points.map((index) => index));

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {newPoints[selected]} votes</div>
      <Button
        handleClick={() => setSelected(getRandomPosition(anecdotes))}
        text={"Next Anecdote"}
      />
      <Button handleClick={incrementPoints} text={"vote"} />
      <h1>Anecdotes with most votes</h1>
      <Anecdote
        text={anecdotes[maxValue(newPoints)[0]]}
        votes={maxValue(newPoints)[1]}
      />
    </div>
  );
};

export default AnecdotesApp;
