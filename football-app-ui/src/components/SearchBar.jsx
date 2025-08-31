import { TextField } from '@mui/material';

export const SearchBar = ({ onSearch }) => {
  return (
    <TextField
      fullWidth
      label="Search by name or team"
      variant="outlined"
      onChange={(e) => onSearch(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
};
