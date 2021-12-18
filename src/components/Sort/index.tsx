import React from 'react';
import {IFilterProps} from '../../App';
import {ToggleButton, ToggleButtonGroup} from '@mui/material';
import './styles.scss';

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
  const handleChange = (e: React.MouseEvent, sort: SortEnum) => {
    setFilter({...filter, sort})
  }
  return (
    <div className="sort">
      <ToggleButtonGroup exclusive value={filter.sort} color={'primary'} size={'small'} fullWidth onChange={handleChange}>
        <ToggleButton value={SortEnum.PRICE}>Самый дешевый</ToggleButton>
        <ToggleButton value={SortEnum.DURATION}>Самый быстрый</ToggleButton>
        <ToggleButton value={SortEnum.OPTIMAL}>Оптимальный</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Sort;