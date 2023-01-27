import React from 'react'
import InputWithLable from "../../shared/components/InputWithLable";


export default function LoginPageInputs({email, setEmail, password, setPassword}) {

  return (
    <>
      <InputWithLable
        value={email}
        setValue={setEmail}
        lable='E-mail'
        type='text'
        placeholder='Enter e-mail address'
        
      />
      <InputWithLable
        value={password}
        setValue={setPassword}
        lable='Password'
        type='password'
        placeholder='Enter password'
        
      />
    </>
  )
}
