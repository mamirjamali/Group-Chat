import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import validateLoginForm from '../../shared/utils/validator';
import { connect } from "react-redux";
import { getActions } from '../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({login}) =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  const navigate = useNavigate()
  
  useEffect(() =>{
    setIsValid(validateLoginForm({ email, password }));
  }, [email, password, isValid])

  const handleClick = () => {
    const userDetails = {
      email,
      password
    }

    login(userDetails, navigate)
  }

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter
        handleClick={handleClick}
        isValid={isValid}
      />
    </AuthBox>
  )
}

const mapActionsToPorps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToPorps)(LoginPage)