import React from 'react';

export const ConnectingLine: React.FC = () => {
  return (
    <div id="line-container" className="relative flex items-center justify-center p-0 h-[70px]">
      <div
        id="line"
        className="h-full w-[1px] p-0"
        style={{
          backgroundImage: 'linear-gradient(#404040 0%, #aaa 5%, #404040 10%)',
          backgroundSize: '100% 200%',
          animation: 'gradientAnimation 2s linear infinite',
          display: 'flex',
        }}
      />
    </div>
  );
};
