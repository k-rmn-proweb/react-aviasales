import React from 'react';
import {ITicketModel} from '../../models/ticket.model';
import {apiConfig} from '../../api/apiConfig';
import Segment from './Segment';

interface ITicketProps {
  ticket: ITicketModel;
}

const Ticket: React.FC<ITicketProps> = ({ ticket }) => {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{ticket.price.toLocaleString('ru-RU')} Р</div>
        <div className="ticket__carrier">
          <img src={apiConfig.getImage(ticket.carrier)} alt={ticket.carrier} />
        </div>
      </div>
      <div className="ticket__segments">
        {ticket.segments.map(segment => <Segment key={segment.duration} segment={segment} />)}
      </div>
    </div>
  );
};

export default Ticket;