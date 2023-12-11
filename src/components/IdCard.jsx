import React from "react";

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className='idcard'>
      <img src={picture} alt="name" />
      <div>
        <p className='line-item'><strong>First Name:</strong> {firstName}</p>
        <p className='line-item'><strong>Last Name:</strong> {lastName}</p>
        <p className='line-item'><strong>Gender:</strong> {gender}</p>
        <p className='line-item'><strong>Height:</strong> {height} cm</p>
        <p className='line-item'><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard;