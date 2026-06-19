import React from "react";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0f]">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-cyan-600 dark:text-cyan-400 animate-spin mx-auto mb-4" />
        <p className="text-slate-600 dark:text-slate-300 text-lg font-display">{message}</p>
      </div>
    </div>
  );
};

Loading.propTypes = { message: PropTypes.string };

export default Loading;
