import React from 'react';
import './page1.css';

export default function LeadDetails() {
  return (
    <div className="lead-details">
      <h3>Lead Details</h3>
      <p><strong>Name:</strong> Orlando</p>
      <p><strong>Contact No:</strong> +54-9062827869</p>
      <p><strong>Email ID:</strong> orlando@gmail.com</p>
      <p><strong>LinkedIn:</strong> linkedin.com/in/timvadde</p>
      <p><strong>Company Name:</strong> Reachinbox</p>

      <div className="activities">
        <h4>Activities</h4>
        <p><strong>Campaign Name:</strong> 3 Steps | 5 Days in Sequence</p>
        <ul>
          <li><strong>Step 1:</strong> Email - Sent 3rd Feb</li>
          <li><strong>Step 2:</strong> Email - Opened 5th Feb</li>
          <li><strong>Step 3:</strong> Email - Opened 5th Feb</li>
        </ul>
      </div>
    </div>
  );
}
