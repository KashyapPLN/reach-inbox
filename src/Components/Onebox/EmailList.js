import React from 'react';
import './page1.css';

export default function EmailList() {
  return (
    <div className="email-list">
      <div className="email-item interested">
        <p><strong>Beata@gmail.com</strong></p>
        <p>I've tried a lot and...</p>
      </div>
      <div className="email-item closed">
        <p><strong>Sanya@gmail.com</strong></p>
        <p>I've tried a lot and...</p>
      </div>
      <div className="email-item interested">
        <p><strong>william@gmail.com</strong></p>
        <p>Payment not going through</p>
      </div>
      <div className="email-item meeting-booked">
        <p><strong>johnson@gmail.com</strong></p>
        <p>Could you tell me more about it</p>
      </div>
      <div className="email-item meeting-completed">
        <p><strong>orlando@gmail.com</strong></p>
        <p>Hi, I am interested</p>
      </div>
    </div>
  );
}
