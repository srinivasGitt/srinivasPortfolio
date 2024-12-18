import React from 'react';
import "./Resume.css";

const Education = () => {
  return (
    <div className="resume container section" style={{paddingLeft:0,}}>
  <h2 className='section__title' style = {{margin:12}}>Education</h2>
  <h2 className='tab' style={{paddingLeft: 30}}>S.R.K Institute of Technology</h2>
  <div className="resume__container"  style={{paddingLeft: 30}}> 
    <p><strong className='tab__list'>Graduation:</strong> B.Tech in Electronics and Communication</p>
    <p><strong className='tab__list'>Year of Graduation:</strong> 2019</p>
  </div>
</div>
  )
}

export default Education
