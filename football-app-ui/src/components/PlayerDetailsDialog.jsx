import {Dialog , DialogTitle, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PlayerDetails } from './PlayerDetails';
import { styles } from './styles/PlayerDetailsDialog.styles'

// type PlayerDetailsDialogProps = {
//   open: Boolean,
//   onClose: () => void,
//   playerId: Number
// }


export function PlayerDetailsDialog ({open , onClose , playerId}) {
    return  <Dialog 
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        keepMounted
      >
        <DialogTitle>
          Player Details 
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ ...styles.dialog, //position: 'absolute', right: 8, top: 8
              color: (playerId%2 === 0) ? 'error.main' : 'grey.500',             
            }} 
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {open && <PlayerDetails playerId={playerId} />} 
      </Dialog>
}