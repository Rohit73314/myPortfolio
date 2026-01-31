import React from 'react';
import PropTypes from 'prop-types';
import { Loader2 } from 'lucide-react';

const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-cyan-600 animate-spin mx-auto mb-4" />
        <p className="text-slate-600 dark:text-slate-300 text-lg">{message}</p>
      </div>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
