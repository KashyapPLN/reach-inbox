import React from 'react';
import './page1.css';

export default function EmailDetail() {
  return (
    <div className="email-detail">
      <h3>New Product Launch</h3>
      <p><strong>From:</strong> jeanne@icloud.com</p>
      <p><strong>To:</strong> lennon.j@mail.com</p>
      <p>Hi [First Name],</p>
      <p>I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups...</p>
      <button className="reply-btn">Reply</button>
    </div>
  );
}
