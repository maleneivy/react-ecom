import React, { useState } from 'react';
import Message from '../../components/Message';
import * as S from "./index.styles";
import { useCartFromLocalStorage } from '../../utils/localStorage/getCart';
import { GoBackButton } from '../../components/GoBackButton';

const ContactPage = () => {
  useCartFromLocalStorage();
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [fullNameError, setFullNameError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [bodyError, setBodyError] = useState('');

  const successMessageText = "Your form was successfully submitted";
  const invalidErrorMessage = "Please check your inputs";

  const validateFullName = () => {
    if (fullName.length < 3) {
      setFullNameError('Full name must be at least 3 characters');
      return false;
    }
    setFullNameError('');
    return true;
  };

  const validateSubject = () => {
    if (subject.length < 3) {
      setSubjectError('Subject must be at least 3 characters');
      return false;
    }
    setSubjectError('');
    return true;
  };

  const validateEmail = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError('');
    return true;
  };
  

  const validateBody = () => {
    if (body.length < 3) {
      setBodyError('Body must be at least 3 characters');
      return false;
    }
    setBodyError('');
    return true;
  };

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
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);
      console.log('Form validation failed. Please check your inputs.');
    }
  };

  return (
    <S.PageContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <div>
          <GoBackButton />
        </div>
        <h1>Contact Us</h1>
        {showSuccessMessage && <Message text={successMessageText} type="success" />}
        {showErrorMessage && <Message text={invalidErrorMessage} type="error" />}
        <S.FormContent>
          <label>Full Name:</label>
          <input type="text" value={fullName} placeholder="Min. 3 characters" onChange={(e) => setFullName(e.target.value)} required />
          <div>
          {fullNameError && <span className="form-error">{fullNameError}</span>}
          </div>
        </S.FormContent>
        <S.FormContent>
          <label>Subject:</label>
          <input type="text" value={subject} placeholder="Min. 3 characters" onChange={(e) => setSubject(e.target.value)} required />
          <div>
          {subjectError && <span className="form-error">{subjectError}</span>}
          </div>
        </S.FormContent>
        <S.FormContent>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div>
          {emailError && <span className="form-error">{emailError}</span>}
          </div>
        </S.FormContent>
        <S.FormContent>
          <label>Body:</label>
          <textarea value={body} placeholder="Min. 3 characters" onChange={(e) => setBody(e.target.value)} required />
          <div>
          {bodyError && <span className="form-error">{bodyError}</span>}
          </div>
        </S.FormContent>
        <S.FormButton type="submit">Submit</S.FormButton>
      </S.FormContainer>
    </S.PageContainer>
  );
};

export default ContactPage;

