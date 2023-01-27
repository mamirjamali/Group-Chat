import React from 'react'
import { Typography } from '@mui/material';


export default function LoginPageHeader() {
    return (
      <>
        <Typography variant='h5' sx={{ color: "white", align: "center"}} >
            Welcome Back!
        </Typography>
        <Typography sx={{color: "white", align: "center"}}>
            Happy to see you agin.
        </Typography>
      </>
  )
}
