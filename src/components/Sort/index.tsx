import React from 'react';
import {IFilterProps} from '../../App';

export enum SortEnum {
  PRICE = 'price',
  DURATION = 'duration',
  OPTIMAL = 'optimal'
}

interface ISortProps {
  filter: IFilterProps;
  setFilter: (state: IFilterProps) => void;
}

const Sort: React.FC<ISortProps> = ({ filter, setFilter }) => {
  return (
    <div className="sort">
      <button
        onClick={() => setFilter({...filter, sort: SortEnum.PRICE})}
        type="button"
        className={`sort__button ${filter.sort === SortEnum.PRICE ? 'sort__button--active' : ''}`}
      >
        Самый дешевый
      </button>
      <button
        onClick={() => setFilter({...filter, sort: SortEnum.DURATION})}
        type="button"
        className={`sort__button ${filter.sort === SortEnum.DURATION ? 'sort__button--active' : ''}`}
      >
        Самый быстрый
      </button>
      <button
        onClick={() => setFilter({...filter, sort: SortEnum.OPTIMAL})}
        type="button"
        className={`sort__button ${filter.sort === SortEnum.OPTIMAL ? 'sort__button--active' : ''}`}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default Sort;