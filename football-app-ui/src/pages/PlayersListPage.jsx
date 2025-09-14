import { useState } from 'react';
import { Container, Grid, Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SearchBar } from '../components/SearchBar';
import { PlayerList } from '../components/PlayerList';
import { PlayerDetails } from '../components/PlayerDetails';
import { usePlayers } from '../hooks/usePlayers';

export default function PlayersListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const players = usePlayers(searchTerm);

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar onSearch={setSearchTerm} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PlayerList players={players} onSelect={setSelectedId} />
        </Grid>
      </Grid>

 {/* todo: pass this to a separate comp. ;  */}
      <Dialog
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
