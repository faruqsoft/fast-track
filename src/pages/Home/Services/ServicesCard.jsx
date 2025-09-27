import React from "react";

const ServiceCard = ({Service}) => {
    const { icon: Icon, title, description } = Service;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 p-6 rounded-lg flex flex-col items-center text-center">
      <div className="text-primary text-5xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
