import React, {useState} from 'react';
import Ticket from './Ticket';
import {ITicketModel} from '../../models/ticket.model';
import './styles.scss';

interface ITicketsProps {
  tickets: ITicketModel[];
}

const Tickets: React.FC<ITicketsProps> = ({ tickets }) => {
  const [limit, setLimit] = useState(5);
  const loadMore = (num: number) => {
    setLimit(limit + num);
  }
  return (
    <div className="tickets">
      {tickets.slice(0, limit).map(ticket => {
        return <Ticket key={`${ticket.price}_${ticket.carrier}`} ticket={ticket} />
      })}
      <button onClick={() => loadMore(5)} type="button" className="tickets__button">Показать еще 5 билетов!</button>
    </div>
  );
};

export default Tickets;