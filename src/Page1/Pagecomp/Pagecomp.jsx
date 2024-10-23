import React from 'react';
import NavBarcomp from '../NavBar/NavBarcomp';
import './Pagecomp.css';
import Todo from '../../assets/To-do.svg';
import inProgress from '../../assets/in-progress.svg';
import Done from '../../assets/Done.svg';
import Cancelled from '../../assets/Cancelled.svg';
import Card from '../Card/Card';

// Sample data for cards
const cardData = [
  {
    status: 'CAM-1',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Task Title Example',
    tag: 'Feature Request',
  },
  {
    status: 'CAM-2',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Another Task Example',
    tag: 'Bug Fix',
  },
  {
    status: 'CAM-3',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    title: 'More Task Example',
    tag: 'Improvement',
  },
];

// Sample data for each column
const columns = [
  { icon: Todo, name: '1st option', length: 2, data: [cardData[0], cardData[1]] },
  { icon: Todo, name: 'To do', length: 3, data: [cardData[0], cardData[1], cardData[2]] },
  { icon: inProgress, name: 'In Progress', length: 1, data: [cardData[1]] },
  { icon: Done, name: 'Done', length: 5, data: [cardData[0], cardData[1], cardData[2], cardData[1], cardData[0]] },
  { icon: Cancelled, name: 'Cancelled', length: 0, data: [] },
];

const Pagecomp = () => {
  return (
    <div className="Page">
      {columns.map((col, index) => (
        <div key={index} className={`Col${index + 1}`}>
          <div className="NavBar">
            <NavBarcomp navbaricon={col.icon} name={col.name} len={col.length} />
          </div>
          {col.data.map((item, idx) => (
            <Card key={idx} cardData={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pagecomp;





