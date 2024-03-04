import { LucideIcon } from "lucide-react";
import React from "react";

type ServiceItemProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const ServiceItem = ({ service }: { service: ServiceItemProps }) => {
  return (
    <div className="border  rounded-lg p-8 pt-20 ">
      <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
        <service.icon />
      </div>
      <h4 className="text-xl mt-4">{service.title}</h4>
      <p className="text-grey-2 text-pretty mt-3">{service.description}</p>
    </div>
  );
};

export default ServiceItem;
