import React from 'react'
import { Button } from '@mui/material'


export default function CustomPrimaryButton({lable, handleClick, isValid, additionalStyles}) {
  return (
      <Button
          sx={{
              width: '100%',
              display: 'flex',
              color: 'white',
              background: '#5865f2',
              textTransform: 'none',
              height: '40px'
          }}
          disabled={!isValid}
          onClick={handleClick}
          style= {additionalStyles ? additionalStyles : {}}
      >
        {lable}
    </Button>
  )
}
