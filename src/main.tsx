import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import '../styles/main.css'; 

console.log('OveTyp_ entry point loaded');

// Error Boundary for debugging production issues
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('React Error Boundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'white', padding: '2rem', fontFamily: 'monospace' }}>
          <h1>⚠️ App Error</h1>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#ff6b6b' }}>
            {this.state.error?.message}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#aaa', fontSize: '12px' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement);
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);