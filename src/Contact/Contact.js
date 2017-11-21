import React from 'react';
import Page from '../components/Page';
import './Contact.css';

const Contact = () => {
  return (
    <Page title="聯繫信息 Contact Us">
      <p>We're happy to answer questions.<br />Give us a call from the numbers below.</p>
      <p>&nbsp;我們會說中文.</p>
      <div dir="ltr">Brooklyn ( 布碌崙)</div>
      <div dir="ltr">5609 8th Ave 2/F</div>
      <div dir="ltr">Brooklyn NY 11220</div>
      <div dir="ltr">(Tel)&nbsp;<a href="tel:718-437-7717" target="_blank">718-437-7717</a></div>
      <div dir="ltr">&nbsp;</div>
      <div dir="ltr">Flushing (法拉盛)</div>
      <div dir="ltr">135-05 40th Road</div>
      <div dir="ltr">Flushing NY 11354&nbsp;</div>
      <div dir="ltr">(Tel)&nbsp;<a href="tel:718-888-3313" target="_blank">718-888-3113</a></div>
      <div dir="ltr">&nbsp;</div>
      <div dir="ltr">Email:&nbsp;<a href="mailto:info@iemshowplace.com" target="_blank">info@iemshowplace.com</a></div>
      <div dir="ltr">Facebook:&nbsp;<a href="http://www.facebook.com/iemshowplace88" target="_blank">IEM Show Place</a></div>
    </Page>
  );
};

export default Contact;
