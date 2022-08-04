import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <section className="mySection text-center">
        <h1>Error 404</h1>
        <p>
          Something went wrong, we are unable to find the page you requested. Go back to{' '}
          <Link className="text-[#000000] text-xl " to="./">
            home
          </Link>
        </p>
      </section>
    </div>
  );
}

export default NotFound;
