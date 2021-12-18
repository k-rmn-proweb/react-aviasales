import React, {useEffect} from 'react';
import classNames from 'classnames';
import './styles.scss';

interface ISideBarProps {
  isOpen?: boolean;
  toggleDrawer: (state: boolean) => void;
}

const Sidebar: React.FC<ISideBarProps> = ({children, isOpen, toggleDrawer}) => {
  useEffect(() => {

    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
      if ((e.target as Element).classList.contains('sidebar--open')) {
        toggleDrawer(false);
      }
    }

    document.addEventListener('click', handleClick, false)

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  return (
    <div className={classNames({
      sidebar: true,
      'sidebar--open' : isOpen
    })}>
      {children}
    </div>
  );
};

export default Sidebar;