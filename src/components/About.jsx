import React from 'react';
import Footer from './Footer'

function About() {
  return (
    <div>
      <div className='instructions'>
        <ul>
            <li>Click on the text area to start.</li>
            <li>Inout the front cover of card as title.</li>
            <li>Input the back as the note.</li>
            <li>Give a try at remembering what's on your card.</li>
            <li>Try Harder.</li>
            <li>Use the "{'>'}" button to check if you remebered right.</li>
            <li>Delete any card with the delte icon.</li>
            <li>This a static website so if you reload you will lose cards.</li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
