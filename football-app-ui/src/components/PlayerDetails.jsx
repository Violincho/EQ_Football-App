import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Card, CardContent, Typography } from '@mui/material';

export const PlayerDetails = ({ playerId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await api.get(`/players/${playerId}`);
      setPlayer(res.data);
    };

    if (playerId) {
      fetchPlayer();
    }
  }, [playerId]);

  if (!player) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{player.name}</Typography>
        <Typography>Team: {player.currentTeam}</Typography>
        <Typography>Position: {player.position}</Typography>
        <Typography>Age: {player.age}</Typography>
        <Typography>Height: {player.height}m</Typography>
      </CardContent>
    </Card>
  );
};
