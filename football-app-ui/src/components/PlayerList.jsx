import { List, ListItem, ListItemText, Paper } from '@mui/material';

export const PlayerList = ({ players, onSelect }) => {
  return (
    <Paper elevation={3}>
      <List>
        {players.length === 0 && <ListItem>No players found.</ListItem>}
        {players.map((player) => (
          <ListItem button key={player.id} onClick={() => onSelect(player.id)}>
            <ListItemText primary={player.name} secondary={player.currentTeam} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
