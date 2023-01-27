import React from 'react'
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from "react-router-dom";
import { Tooltip } from '@mui/material';


export default function LoginPageFooter({ handleClick, isValid }) {

    const navigate = useNavigate()
    
    const redirectHandler = () => {
        navigate('/register')
    }

    return (
        <>
        <Tooltip
           title={isValid ? 'Click to login' : 'Enter correct Email and Password'}
         >
         <div>
            <CustomPrimaryButton
                lable='Login'
                additionalStyles= {{marginTop: '5%'}}
                handleClick={handleClick}
                isValid={isValid}
            />
         </div>  
        </Tooltip>
            <RedirectInfo
                text={'Need an account? '}
                redirectText={'Create an account'}
                redirectHandler={redirectHandler}
                additionalStyle={{marginTop: '15px'}}
            />
      </>
  )
}
