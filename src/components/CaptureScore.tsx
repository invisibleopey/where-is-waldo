import React, { useState } from 'react';
import { formatTime } from '../utils/FormatTime';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

type myProps = {
  timer: number;
  gameId: string | undefined;
};

const CaptureScore = (props: myProps) => {
  const [playerName, setPlayerName] = useState('');
  const { timer, gameId } = props;
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setPlayerName(event.target.value);
  };

  const storeScoreToDb = async (event: any) => {
    event.preventDefault();
    const collectionName = `${gameId} leaderboard`;
    try {
      await addDoc(collection(db, collectionName), {
        name: playerName,
        timer: timer,
      });
    } catch (error) {
      throw error;
    }
    navigate('/leaderboard');
  };

  return (
    <div className="w-[70%] mx-auto">
      <p className=" mb-2">You found all the characters in {formatTime(props.timer)}</p>
      <form action="#" onSubmit={storeScoreToDb}>
        <input
          type="text"
          name="name"
          id="name"
          value={playerName}
          onChange={handleInputChange}
          placeholder="Name"
          className="border-slate-400 border-solid border-2 p-2 mb-2 mr-2"
        />
        <button type="submit" className="btn px-2 py-1 mb-2">
          Add score
        </button>
      </form>
    </div>
  );
};

export default CaptureScore;
