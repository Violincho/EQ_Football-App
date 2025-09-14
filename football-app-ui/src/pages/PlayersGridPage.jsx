import { useEffect, useState } from 'react';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SearchBar } from '../components/SearchBar';
import { PlayerDetails } from '../components/PlayerDetails';
import { usePlayers } from '../hooks/usePlayers';

export default function PlayersGridPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const players = usePlayers(searchTerm);

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar onSearch={setSearchTerm} />

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {players.length  && (
          <Grid item xs={12}>
            <Typography>No players found.</Typography>
          </Grid>
        )}

        {/* todo: pass this to a separate comp. ;  */}
        {players.map((p) => (
          <Grid item key={p.id} xs={12} sm={6} md={4}> 
            <Card elevation={3}>
              <CardActionArea onClick={() => setSelectedId(p.id)}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{p.name}</Typography>
                  <Typography variant="body2" color="text.secondary">Team: {p.currentTeam ?? p.team}</Typography>
                  <Typography variant="body2" color="text.secondary">Position: {p.position}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      
       {/* todo: pass this to a separate comp. ;  */}
      <Dialog //popup
        open={!!selectedId}
        onClose={() => setSelectedId(null)}
        maxWidth="sm"
        fullWidth
        keepMounted
      >
        <DialogTitle>
          Player Details
          <IconButton
            aria-label="close"
            onClick={() => setSelectedId(null)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {selectedId && <PlayerDetails playerId={selectedId} />}
      </Dialog>
    </Container>
    
  );
}
