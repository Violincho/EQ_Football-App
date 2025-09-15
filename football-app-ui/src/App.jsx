import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Dialog } from '@mui/material';
import PlayersListPage from './pages/PlayersListPage';     
import PlayersGridPage from './pages/PlayersGridPage';

export default function App() {
  return (
    <BrowserRouter>
    {/* navigation bar */}
      <AppBar position="static"> 
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">List View</Button>
            <Button color="inherit" component={Link} to="/grid">Grid View</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<PlayersListPage />} />
        <Route path="/grid" element={<PlayersGridPage />} />
      </Routes>
    </BrowserRouter>
  //Todo: the dialog component tht I will make, make this dialog only in one place if possible - done
    //Make a separate file for styles. - partially done
    //create some conditional styling using sx. based on some condition
  );
}
