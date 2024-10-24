import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    phone:string;
    email:string;
    message:string;
  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    phone,
    email,
    message
  }) => (
    <div>
      <h1>You have a new message</h1>
      <h3>Sender Name : {name}</h3>
      <h5>Sender Phone : {phone} Email : {email}</h5>
      <p>message : {message}</p>
    </div>
  );