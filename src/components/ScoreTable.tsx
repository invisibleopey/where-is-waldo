import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, DocumentData } from 'firebase/firestore';
import { formatTime } from '../utils/FormatTime';

const ScoreTable = () => {
  let params = useParams();
  const [scoreList, setScoreList] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      // Clear current scoreList
      setScoreList([]);
      const collectionName = `${params.gameId} leaderboard`;
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef, orderBy('timer'));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const docObject = doc.data();
          setScoreList((prevData) => [...prevData, docObject]);
        });
      } catch (error) {
        throw error;
      }
    };
    fetchScores();
  }, [params.gameId]);

  return (
    <table className="w-[100%]">
      <tr>
        <th>Name</th>
        <th>Time</th>
      </tr>
      {scoreList.length
        ? scoreList.map((player) => {
            return (
              <tr>
                <td>{player.name}</td>
                <td>{formatTime(player.timer)}</td>
              </tr>
            );
          })
        : null}
    </table>
  );
};

export default ScoreTable;
