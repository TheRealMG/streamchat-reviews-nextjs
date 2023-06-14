import React from "react";
import Link from "next/link";

const Card = ({id, type, onClick, children}) => {
  return (
    <>
      {type === "review" ? (
        <div className="card cursor-pointer hover:scale-[1.02] transform transition-transform">
          <Link href={`/reviews/${id}`}>
            {children}
          </Link>
        </div>
      ) : type === "game" ? (
        <div className="card cursor-pointer hover:scale-[1.02] transform transition-transform" onClick={onClick}>
          <Link href={`/games/${id}`}>
            {children}
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Card;
