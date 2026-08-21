import { useState } from 'react'

const generateResetCode = () => Math.floor(100000 + Math.random() * 900000).toString()

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isResetting, setIsResetting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (username === 'A' && password === '9') {
      setMessage('Login successful! Welcome back.')
      onLoginSuccess?.()
    } else {
      setMessage('Invalid username or password.')
    }
  }

  const handleForgotPassword = () => {
    setIsResetting(true)
    setMessage('')
  }

  const handleSendResetCode = () => {
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setMessage('Please enter your email address to receive the reset code.')
      return
    }

    const resetCode = generateResetCode()
    const emailBody = `Hello,\n\nYour password reset code is: ${resetCode}\n\nUse this code to reset your password.\n\nRegards,\nDhakal Team`

    window.location.href = `mailto:${trimmedEmail}?subject=${encodeURIComponent('Password Reset Code')}&body=${encodeURIComponent(emailBody)}`

    setMessage(`A reset code has been sent to ${trimmedEmail}. Your code is ${resetCode}.`)
    setIsResetting(false)
    setEmail('')
  }

  return (
    <div className="login-card">
      <div className="login-brand">Dhakal </div>
      <h1>Welcome back</h1>
      <p className="login-subtitle">Sign in to continue</p>

      {!isResetting ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            <span>ID</span>
            <input
              type="text"
              placeholder="Enter your ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <button type="button" className="text-button" onClick={handleForgotPassword}>
              Forgot password?
            </button>
          </div>

          <button type="submit">Login</button>

          {message && <p className="login-message">{message}</p>}
        </form>
      ) : (
        <div className="login-form">
          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button type="button" onClick={handleSendResetCode}>Send reset code</button>

          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              setIsResetting(false)
              setEmail('')
              setMessage('')
            }}
          >
            Back to login
          </button>

          {message && <p className="login-message">{message}</p>}
        </div>
      )}
    </div>
  )
}

export default LoginForm
