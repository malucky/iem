import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

const Page = (props) => {
  return (
    <article className="page">
      <header className="page-header">
        <h2 className="page-title">{props.title}</h2>
      </header>
      <section className="page-body">
        {props.children}
      </section>
    </article>
  );
};

Page.props = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Page;
