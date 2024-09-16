import React from 'react';

const About = () => {
  let aboutStyle = {
    minHeight: "90vh", // Ensures the content takes up at least most of the viewport height
    margin: "40px auto",
  };

  return (
    <div style={aboutStyle}>
      <h2>This is an About Component</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic saepe ipsa ducimus maiores quidem, asperiores sed ea fuga culpa perferendis, laborum veniam tenetur recusandae vero. Assumenda perferendis saepe natus.</p>
    </div>
  );
};

export default About;

