import React from 'react'
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from "react-router-dom";
import { Tooltip } from '@mui/material';


export default function RegisterPageFooter({ handleClick, isValid }) {

    const navigate = useNavigate()
    
    const redirectHandler = () => {
        navigate('/login')
    }

    return (
        <>
        <Tooltip
           title={isValid ? 'Click to Register' : 'Enter correct Email and Password'}
         >
         <div>
            <CustomPrimaryButton
                lable='Register'
                additionalStyles= {{marginTop: '5%'}}
                handleClick={handleClick}
                isValid={isValid}
            />
         </div>  
        </Tooltip>
            <RedirectInfo
                text={''}
                redirectText={'Have an account?'}
                redirectHandler={redirectHandler}
                additionalStyle={{marginTop: '5px'}}
            />
      </>
  )
}
