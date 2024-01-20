'use client';
import { FC, useState, useContext } from 'react';

type Props = {
  text: string;
};

const Sliding: FC<Props> = (props) => {
  const { text } = props;

  return (
    <div className="sliding-text-container">
      <span className="text">{text}</span>
    </div>
  );
};

export default Sliding;
