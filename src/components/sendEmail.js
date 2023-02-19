import React, { useRef, useDispatch } from 'react';
import emailjs from '@emailjs/browser';

export const SendEmail = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const closeEmail = () => {
    dispatch({ type: 'CLOSE_EMAIL' });
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_dkfnmqc', 'template_7jfvn9m', form.current, 'Yh8F6HerpiCjw109J').then(
      result => {
        console.log(result.text);
        alert('전송되었습니다.');
        closeEmail();
      },
      error => {
        console.log(error.text);
        alert('전송을 실패하였습니다.');
      },
    );
  };

  return (
    <sendEmail ref={form} onSubmit={sendEmail}>
      <button onClick={closeEmail}>X</button>
      <label>이름</label>
      <input type="text" name="from_name" placeholder="이름을 입력해주세요." />
      <label>연락처</label>
      <input type="tel" name="phone" placeholder="연락처를 입력해주세요." />
      <label>Email</label>
      <input type="email" name="email" placeholder="메일 주소를 입력해주세요" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </sendEmail>
  );
};
