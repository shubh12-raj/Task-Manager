import React from 'react';
import NavBarcomp from '../Page1/NavBar/NavBarcomp';
import './User.css';
import Todo from '../assets/To-do.svg';
import inProgress from '../assets/in-progress.svg';
import Done from '../assets/Done.svg';
import Cancelled from '../assets/Cancelled.svg';
import Card from './Card/Card';
import Backlog from '../assets/Backlog.svg';

// Sample data for cards
const cardData = [
  {
    status: 'CAM-1',
    icon: Backlog,
    title: 'Task Title Example',
    tag: 'Feature Request',


  },
  {
    status: 'CAM-2',
    icon: Backlog,
    title: 'Another Task Example',
    tag: 'Bug Fix',
  },
  {
    status: 'CAM-3',
    icon: Backlog,
    title: 'More Task Example',
    tag: 'Improvement',
  },
  {
    status: 'CAM-1',
    icon: Done,
    title: 'Task Title Example',
    tag: 'Feature Request',


  },
];

// Sample data for each column
const columns = [
  { icon: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Abhideep', length: 2, data: [cardData[0]] },
  { icon: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Akansha', length: 3, data: [cardData[0]] },
  { icon: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Anoop', length: 1, data: [cardData[1]] },
  { icon: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Arbaaz', length: 5, data: [cardData[3], cardData[1]] },
  { icon: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Harsh', length: 0, data: [cardData[0]] },
];

const User = () => {
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

export default User;

