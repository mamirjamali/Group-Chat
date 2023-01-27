import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/system';


const BoxWrraper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2'
})

export default function AuthBox(props) {
  return (
    <BoxWrraper>
          <Box
              sx={{
                  width: '40rem',
                  height: '28rem',
                  bgcolor: '#36393f',
                  borderRadius: '5px',
                  boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '25px'
              }}
            >
            {props.children}
            
        </Box>
    </BoxWrraper>
  )
}
