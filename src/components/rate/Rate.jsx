import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Rate({ value }) {
    console.log(value)
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        '& .MuiRating-root': {fontSize : '1rem'}
      }}
    >
      <Rating name="read-only" value={value} readOnly />

    </Box>
  );
}