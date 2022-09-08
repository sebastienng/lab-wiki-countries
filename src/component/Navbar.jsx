import React from 'react';

export const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          {title}
        </a>
      </div>
    </nav>
  );
};
