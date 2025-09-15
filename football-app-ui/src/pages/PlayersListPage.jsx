import { useState } from 'react';
import { Container, Grid} from '@mui/material';
import { SearchBar } from '../components/SearchBar';
import { PlayerList } from '../components/PlayerList';
import { PlayerDetailsDialog } from '../components/PlayerDetailsDialog';
import { usePlayers } from '../hooks/usePlayers';

export default function PlayersListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const players = usePlayers(searchTerm);

 const open = Boolean(selectedId);
 const handleClose = () => setSelectedId(null);

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar onSearch={setSearchTerm} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PlayerList players={players} onSelect={setSelectedId} />
        </Grid>
      </Grid>

 {/* dialog here  */}
      <PlayerDetailsDialog
              open={open}
              onClose={handleClose}
              playerId={selectedId}
              />
    </Container>
  );
}
