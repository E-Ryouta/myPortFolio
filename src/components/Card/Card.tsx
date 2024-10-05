import React from 'react';

type CardProps = {
  imgPath: string;
  title: string;
};

export function Card({ imgPath, title }: CardProps) {
  return (
    <button>
      <div className="bg-primary  w-96">
        <img src={imgPath} alt="Card Image" className="w-full h-full border-8 border-primary" />
        <div>
          <h1 className="text-2xl text-base">{title}</h1>
        </div>
      </div>
    </button>
  );
}
