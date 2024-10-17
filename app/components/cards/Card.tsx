import React from "react";

interface ICard {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICard> = ({ children, title, className = "" }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 text-center ${className}`}
      role="region"
      aria-labelledby={title ? "card-title" : undefined}
    >
      {title && (
        <h2 id="card-title" className="mb-4 text-4xl font-sans font-bold pb-10">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;