import React from 'react'
import mod from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={mod.root}>
      <h1>
        <span>😞</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={mod.description}>
        К сожалению данная страница отсутствует в нашем магазине
      </p>
    </div>
  );
};