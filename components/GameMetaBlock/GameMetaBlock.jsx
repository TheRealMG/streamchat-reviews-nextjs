import React from 'react'

const GameMetaBlock = ({ title, columns = 1, children }) => {
  return (
    <div className={`game_meta-block col-span-${columns}`}>
      <h2 className="game_meta-title text-white/60 font-medium text-sm">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default GameMetaBlock;