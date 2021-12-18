import React, {useEffect, useMemo, useState} from 'react';
import {Filter, Header, Sidebar, Sort, Tickets} from './components';
import {TicketsAPI} from './api/ticketsAPI';
import {ITicketModel} from './models/ticket.model';
import {SortEnum} from './components/Sort';
import './App.scss';

export interface IFilterProps {
  stops: string[];
  sort: SortEnum;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<ITicketModel[]>([]);
  const [filter, setFilter]   = useState<IFilterProps>({stops: ['all'], sort: SortEnum.PRICE});
  const [drawer, setDrawer]   = useState<boolean>(false);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      try {
        const { tickets } = await TicketsAPI.getTickets();
        setTickets(tickets);
        setLoading(false);
      } catch (e) {
        setTickets([]);
        setLoading(false);
      }
    }
    fetchTickets();
  }, []);

  const sortedTickets = useMemo(() => {
    switch (filter.sort) {
      case SortEnum.DURATION:
        return [...tickets].sort((a, b) => {
          if (a.segments[0].duration > b.segments[0].duration) {
            return 1;
          }
          if (a.segments[0].duration < b.segments[0].duration) {
            return -1;
          }
          return 0;
        });
        break;
      case SortEnum.OPTIMAL:
        return [...tickets].sort((a, b) => {
          if (a.segments[0].duration > b.segments[0].duration && a.price > b.price) {
            return 1;
          }
          if (a.segments[0].duration < b.segments[0].duration && a.price < b.price) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        return [...tickets].sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
        break;
    }
  }, [filter.sort, tickets]);

  const sortedAndFilteredTickets = useMemo(() => {
    if (filter.stops.length === 0) {
      setFilter({...filter, stops: ['all']});
    }
    if (filter.stops.includes('all')) {
      return sortedTickets;
    }
    return sortedTickets.filter(ticket => {
      return filter.stops.includes(String(ticket.segments[0].stops.length)) && filter.stops.includes(String(ticket.segments[1].stops.length));
    });
  }, [filter.stops, sortedTickets]);

  return (
    <div className="App">
      <Header toggleDrawer={setDrawer} filter={filter} setFilter={setFilter} />
      <div className="container">
        <main className="main">
          <Sidebar isOpen={drawer} toggleDrawer={setDrawer}>
            <Filter filter={filter} setFilter={setFilter} />
          </Sidebar>
          <div className="content">
            <Sort filter={filter} setFilter={setFilter} />
            {loading ? <h3>Loading...</h3> : (
              <Tickets tickets={sortedAndFilteredTickets} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
