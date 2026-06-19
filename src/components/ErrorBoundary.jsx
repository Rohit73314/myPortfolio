import React from "react";
import PropTypes from "prop-types";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0f] p-4">
          <div className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 text-center border border-slate-200 dark:border-slate-800">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <h1 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              We&apos;re sorry for the inconvenience. An unexpected error has occurred.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-left overflow-auto max-h-40">
                <p className="text-sm font-mono text-red-600 dark:text-red-400">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-xs text-slate-600 dark:text-slate-400 mt-2 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
            <div className="flex gap-3 justify-center">
              <Button
                data-testid="error-retry-btn"
                onClick={this.handleReset}
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={() => {
                  window.location.href = "/";
                }}
                variant="outline"
                className="border-slate-300 dark:border-slate-600"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = { children: PropTypes.node.isRequired };

export default ErrorBoundary;
