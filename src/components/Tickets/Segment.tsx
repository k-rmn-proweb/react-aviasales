import React from 'react';
import { ISegment } from '../../models/ticket.model';
import moment from 'moment';

interface ISegmentProps {
  segment: ISegment;
}

const Segment: React.FC<ISegmentProps> = ({ segment }) => {

  const getTimeFromMinutes = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = Math.floor(minutes % 60);

    return `${pad(h)}ч ${pad(m)}м`;
  }

  const getDate = (date: Date, duration: number): string => {
    const d = new Date(date);
    const newD = moment(d).add(duration, 'minutes').toDate();

    return `${pad(d.getHours()) + ":" + pad(d.getMinutes())} - ${pad(newD.getHours()) + ":" + pad(newD.getMinutes())}`;
  }

  function pad(value: number) {
    if(value < 10) {
      return '0' + value;
    } else {
      return value;
    }
  }

  return (
    <div className="segment">
      <div className="segment__origin">
        <div className="segment__title">{segment.origin} – {segment.destination}</div>
        <div className="segment__value">{getDate(segment.date, segment.duration)}</div>
      </div>
      <div className="segment__duration">
        <div className="segment__title">В пути</div>
        <div className="segment__value">{getTimeFromMinutes(segment.duration)}</div>
      </div>
      <div className="segment__stops">
        <div className="segment__title">{segment.stops.length} пересадки</div>
        <div className="segment__value">{segment.stops.length ? segment.stops.join(', ') : `Прямой рейс`}</div>
      </div>
    </div>
  );
};

export default Segment;