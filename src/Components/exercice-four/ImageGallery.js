import React, { useState } from "react";

export const ImageGallery = ({ links }) => {
  const [propsLinks, setPropsLinks] = useState(links);

  const deleteLink = (link) => {
    setPropsLinks(propsLinks.filter((item) => item !== link));
  };

  console.log(propsLinks);
  return (
    <>
      {propsLinks.map((link, index) => (
        <div key={index}>
          <img src={link} alt="images" />
          <button onClick={() => deleteLink(link)}>X</button>
        </div>
      ))}
    </>
  );
};
