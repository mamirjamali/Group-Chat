import React from 'react'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'

const RedirectText = styled('span')({
    color: '#00AFF4',
    cursor: 'pointer',
    fontWeight: 500
})

export default function RedirectInfo({text, redirectText, redirectHandler, additionalStyle}) {
  return (
        <Typography
              sx={{color: 'white'}}
              variant='h7'
              style={additionalStyle ? additionalStyle : {}}
        >
              {text}
              <RedirectText onClick={redirectHandler}>{ redirectText }</RedirectText>
        </Typography>
      )
}
