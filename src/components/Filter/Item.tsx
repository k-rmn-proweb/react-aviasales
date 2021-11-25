import React from 'react';

interface FilterItemProps {
  value: string;
  checked?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Item: React.FC<FilterItemProps> = ({ name, onChange, value, checked }) => {
  return (
    <label className="filter__item">
      <input type="checkbox" value={value} checked={checked}  onChange={(e) => onChange?.(e)} />
      <span className="ico" />
      {name}
    </label>
  );
};

export default Item;