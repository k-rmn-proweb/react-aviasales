import React from 'react';
import Item from './Item';
import {IFilterProps} from '../../App';

interface IFilter {
  filter: IFilterProps;
  setFilter: (state: IFilterProps) => void;
}

const Filter: React.FC<IFilter> = ({ filter, setFilter }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFilter({...filter, stops: [...filter.stops, e.target.value]})
    } else {
      const newStops = filter.stops.filter((n) => n !== e.target.value);
      setFilter({...filter, stops: newStops});
    }
  }

  return (
    <div className="filter">
      <div className="filter__header">Количество пересадок</div>
      <Item
        name="Все"
        value={'all'}
        onChange={handleChange}
        checked={filter.stops.includes('all')}
      />
      <Item name="Без пересадок" value={'0'} onChange={handleChange} />
      <Item name="1 пересадка" value={'1'} onChange={handleChange} />
      <Item name="2 пересадки" value={'2'} onChange={handleChange} />
      <Item name="3 пересадки" value={'3'} onChange={handleChange} />
    </div>
  );
};

export default Filter;