import React from 'react';
import NavBarcomp from '../Page1/NavBar/NavBarcomp';
import './Priority.css';
import Todo from '../assets/To-do.svg';
import inProgress from '../assets/in-progress.svg';
import Done from '../assets/Done.svg';
import Cancelled from '../assets/Cancelled.svg';
import Card from './Card/Card';
import Threedot from '../assets/3 dot menu.svg';
import Urgentr from '../assets/SVG - Urgent Priority colour.svg';
import High from '../assets/Img - High Priority.svg';
import Medium from '../assets/Img - Medium Priority.svg';
import Low from '../assets/Img - Low Priority.svg';
import Backlog from '../assets/Backlog.svg';
import Inprogress from '../assets/in-progress.svg';
// Sample data for cards
const cardData = [
  {
    icon:Backlog,
    status: 'CAM-2',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Task Title Example',
    tag: 'Feature Request',
  },
  {
    icon:Inprogress,
    status: 'CAM-3',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Another Task Example',
    tag: 'Bug Fix',
  },
  { icon:Backlog,
    status: 'CAM-4',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    title: 'More Task Example',
    tag: 'Improvement',
  },
  { icon:Done,
    status: 'CAM-11',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    title: 'More Task Example',
    tag: 'Improvement',
  },
  { icon:Backlog,
    status: 'CAM-11',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    title: 'More Task Example',
    tag: 'Improvement',
  },
];

// Sample data for each column
const columns = [
  { icon: Threedot, name: 'No priority', length: 2, data: [cardData[0], cardData[1]] },
  { icon: Urgentr, name: 'Urgent', length: 3, data: [cardData[2], cardData[3]] },
  { icon: High, name: 'High', length: 1, data: [cardData[3],cardData[2],cardData[4]] },
  { icon: Medium, name: 'Medium', length: 5, data: [cardData[3],cardData[3]] },
  { icon: Low, name: 'Low', length: 0, data: [cardData[3],cardData[0]] },
];

const Priority = () => {
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

export default Priority;

