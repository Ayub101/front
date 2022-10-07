import React from 'react';
import Cards from '../components/videocards/videoCard';
import Cards2 from '../components/videocards/videoCard2';
import Cards3 from '../components/videocards/videoCard3'; 
import Cards4 from '../components/videocards/videoCard4';

const Video_Book = () => {
  return (
    <div className="bg-dark">
      <Cards></Cards>
      <p></p>
      <Cards2></Cards2>
      <p></p>
      <Cards3></Cards3>
      <p></p>
      <Cards4></Cards4>
    </div>
  );
};
  
export default Video_Book;