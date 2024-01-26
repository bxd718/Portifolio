import React from 'react';

export default function Section(props) {
  return (
    <section>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <h2> {props.title} </h2>
        <p> {props.subtitle} </p>
        <ul className="skills-list">

            {props.children}

        </ul>
      </div>
    </section>
  );
}
