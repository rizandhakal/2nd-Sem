import { useState } from 'react'

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (username === 'rizandhakal' && password === 'rizadhakal9897') {
      setMessage('Login successful! Welcome back.')
      onLoginSuccess?.()
    } else {
      setMessage('Invalid username or password.')
    }
  }

  return (
    <div className="login-card">
      <div className="login-brand">Dhakal </div>
      <h1>Welcome back</h1>
      <p className="login-subtitle">Sign in to continue</p>

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
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  )
}

export default LoginForm
