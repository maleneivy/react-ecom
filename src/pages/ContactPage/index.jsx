import React, { useState } from 'react';
import Message from '../../components/Message';
import * as S from "./index.styles";

const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setErrorMessage] = useState(false);

  const successMessageText = "Your form was successfully submitted";
  const invalidErrorMessage = "Please check your inputs"

  const validateFullName = () => fullName.length >= 3;
  const validateSubject = () => subject.length >= 3;
  const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateBody = () => body.length >= 3;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFullName() && validateSubject() && validateEmail() && validateBody()) {
      console.log({
        fullName,
        subject,
        email,
        body
      });
        setFullName('');
        setSubject('');
        setEmail('');
        setBody('');
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
          }, 10000);

    } else {
        setErrorMessage(true);
        setTimeout(() => {
            setErrorMessage(false);
        }, 5000);
        console.log('Form validation failed. Please check your inputs.');
    }
  };

  return (
    <S.PageContainer>
      <S.FormContainer onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      {showSuccessMessage && <Message text={successMessageText} type="success" />}
      {showErrorMessage && <Message text={invalidErrorMessage} type="error" />}
        <S.FormContent>
          <label>Full Name:</label>
          <input type="text" value={fullName} placeholder="Min. 3 characters" onChange={(e) => setFullName(e.target.value)} required />
        </S.FormContent>
        <S.FormContent>
          <label>Subject:</label>
          <input type="text" value={subject} placeholder="Min. 3 characters" onChange={(e) => setSubject(e.target.value)} required />
          </S.FormContent>
        <S.FormContent>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </S.FormContent>
        <S.FormContent>
          <label>Body:</label>
          <textarea value={body} placeholder="Min. 3 characters"  onChange={(e) => setBody(e.target.value)} required />
          </S.FormContent>
        <S.FormButton type="submit">Submit</S.FormButton>
      </S.FormContainer>
    </S.PageContainer>
  );
};

export default ContactPage;
