import React from 'react';
import { Link } from 'react-router-dom';

const RoadmapHeader = () => {
  return (
    <div id='roadmap-header'>
      <div id='rm-head-left'>
        <Link to='/' className='goback-blue header4'>
          <svg
            id='left-arrow'
            width='7'
            height='10'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 9L2 5l4-4'
              stroke='#ffffff'
              strokeWidth='2'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
          Go Back
        </Link>
        <h1 className='header1'>Roadmap</h1>
      </div>
      <button className='btn1 header4'>
        <svg width='9' height='9' xmlns='http://www.w3.org/2000/svg'>
          <text
            transform='translate(-24 -20)'
            fill='#F2F4FE'
            fillRule='evenodd'
            fontFamily='Jost-Bold, Jost'
            fontSize='14'
            fontWeight='bold'
          >
            <tspan x='24' y='27.5'>
              +
            </tspan>
          </text>
        </svg>
        Add Feedback
      </button>
    </div>
  );
};

export default RoadmapHeader;
