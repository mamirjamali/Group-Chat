import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
import {validateRegisterForm} from '../../shared/utils/validator';
import { connect } from "react-redux";
import { getActions } from '../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';


const RegisterPage = ({register}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')
  const [isValid, setIsValid] = useState(false)

  const navigate = useNavigate()
  useEffect(() =>{
    setIsValid(validateRegisterForm({ email, password, username }));
  }, [email, password, username, isValid])

  const handleClick = () => {
    const userDetails = {
      email,
      username,
      password
    }
    register(userDetails, navigate)
  }

  return (
    <AuthBox>
      <RegisterPageHeader />
      <RegisterPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUserName={setUserName}
      />
      <RegisterPageFooter
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

export default connect(null, mapActionsToPorps) (RegisterPage)