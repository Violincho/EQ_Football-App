import {Dialog , DialogTitle} from 'mui/material'

export function PlayerDetailsDialog () {
    return  <Dialog 
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
}