import React from "react";

const MapButton = () => {
  return (
    <div className="my-3 lg:w-[39.9%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0922401!2d72.9212571!3d19.0922401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c9e30858db%3A0x776c22b666023b89!2sThe%20Trees!5e0!3m2!1sen!2sin!4v1234567890"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Trees Location"
      />
    </div>
  );
};

export default MapButton;