import React from 'react';
import Page from '../components/Page';
import './Contact.css';

const Contact = () => {
  return (
    <Page title="聯繫信息 Contact Us">
      <section className="contact">
        <p>We're happy to answer questions.<br />Give us a call from the numbers below.</p>
        <p>我們會說中文.</p>
        <address className="contact-address">
          Brooklyn (布碌崙)<br />
          5609 8th Ave 2/F<br />
          Brooklyn NY 11220<br />
          (Tel) <a href="tel:718-437-7717">718-437-7717</a><br />
          <br />
          Flushing (法拉盛)<br />
          135-05 40th Rd<br />
          Flushing NY 11354<br />
          (Tel) <a href="tel:718-888-3313">718-888-3113</a><br />
          <br />
          Email: <a href="mailto:info@iemshowplace.com">info@iemshowplace.com</a><br />
          Facebook: <a href="http://www.facebook.com/iemshowplace88">IEM Show Place</a><br />
        </address>
      </section>
    </Page>
  );
};

export default Contact;
