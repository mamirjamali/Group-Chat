export default function validateLoginForm({email, password}) {
  const isPasswordValid = validatePassword(password)
  const isEmailValid = validEmail(email)

  return isEmailValid && isPasswordValid
}
export function validateRegisterForm({ email, username, password }) {
  const isPasswordValid = validatePassword(password)
  const isEmailValid = validEmail(email)
  const isUserNameValid = validUsername(username)

  return isEmailValid && isPasswordValid && isUserNameValid
}

const validatePassword = (password) => {
  return password.length >= 6
}

export const validEmail = (email) => {
  const pattern = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/
  return pattern.test(email)
}

const validUsername = (username) => {
  return username.length >= 4
}