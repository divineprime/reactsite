import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

const Servies = () => {
  const data = { title: "our", subTitle: "services" };

  return (
    <section className="section services" id="services">
      <Title props={data} />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service props={service} />;
        })}
      </div>
    </section>
  );
};

export default Servies;
