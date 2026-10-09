import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './login.jsx'
import { BrowserRouter } from 'react-router-dom'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state so the next render shows the fallback UI.
  }

  componentDidCatch(error, info) {
    console.error("Logging error:", error, info); // You can log the error to a service here
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Fallback UI
    }
    return this.props.children;
  }
}


createRoot(document.getElementById('root')).render(
 
<BrowserRouter>
    <ErrorBoundary>
      <Login/>
    </ErrorBoundary>
  </BrowserRouter>
    
)
