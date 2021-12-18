import React, {useState} from 'react';
import {Box, FormControlLabel, IconButton, Modal, Radio, RadioGroup} from '@mui/material';
import {FilterAltOutlined, Menu} from '@mui/icons-material';
import logo from './logo.svg';
import {SortEnum} from '../Sort';
import {IFilterProps} from '../../App';
import './styles.scss';

interface IHeaderProps {
  filter: IFilterProps;
  setFilter: (state: IFilterProps) => void;
  toggleDrawer: (state: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ toggleDrawer, filter, setFilter }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e: React.ChangeEvent, sort: string) => {
    const sortEnum = sort as SortEnum;
    setFilter({...filter, sort: sortEnum});
    handleClose();
  }
  return (
      <div className="container">
        <header className="header">
          <div className="header__burger">
            <IconButton color="primary" onClick={() => toggleDrawer(true)}>
              <Menu />
            </IconButton>
          </div>
          <div className="header__logo">
            <img src={logo} alt="aviasales"/>
          </div>
          <div className="header__sort">
            <IconButton color="primary" onClick={handleOpen}>
              <FilterAltOutlined />
            </IconButton>
            <Modal open={open} onClose={handleClose} className="header__modal">
              <Box className="header__modal__content">
                <RadioGroup
                  defaultValue={filter.sort}
                  value={filter.sort}
                  name="radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel value={SortEnum.PRICE} control={<Radio />} label="Самый дешевый" />
                  <FormControlLabel value={SortEnum.DURATION} control={<Radio />} label="Самый быстрый" />
                  <FormControlLabel value={SortEnum.OPTIMAL} control={<Radio />} label="Оптимальный" />
                </RadioGroup>
              </Box>
            </Modal>
          </div>
        </header>
      </div>
  );
};

export default Header;