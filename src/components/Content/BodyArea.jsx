import React from "react";
import style from "./BodyArea.module.css";
const BodyArea = () => {
  return (
    <div className={`${style.main} font-pt m-6 grid grid-row-2`}>
      <div className="flex flex-col gap-9">
        <h1
          className={`${style.summary} text-4xl font-bold text-center rounded-full`}
        >
          Summary
        </h1>
        <p className="float-left text-xl">
          <span>
            Medicines can treat diseases and improve your health. If you are
            like most people, you need to take medicine at some point in your
            life. You may need to take medicine every day, or you may only need
            to take medicine once in a while.
          </span>
          <img
            className="float-right p-10 m-2 h-96"
            src="../../public/summaryMedicinePhoto.avif"
            alt=""
          />
          Either way, you want to make sure that your medicines are safe, and
          that they will help you get better. In the United States, the Food and
          Drug Administration is in charge of ensuring that your prescription
          and over-the-counter medicines are safe and effective.
          <br />
          There are always risks to taking medicines. It is important to think
          about these risks before you take a medicine. Even safe medicines can
          cause unwanted side effects or interactions with food, alcohol, or
          other medicines you may be taking. Some medicines may not be safe
          during pregnancy. To reduce the risk of reactions and make sure that
          you get better, it is important for you to take your medicines
          correctly. You should also be careful when giving medicines to
          children, since they can be more vulnerable to the effects of
          medicines.
        </p>
      </div>

      <div className="flex flex-col gap-5 ">
        <h1
          className={`${style.summary} text-4xl font-bold text-center rounded-full`}
        >
          About
        </h1>
        <p className="text-xl">
          We are a software company and are supported by individuals from Indian
          pharmaceutical with 40+ experience. We are creating products and
          services to help local pharmacies grow their business. As a
          side-project, we are launching this mini-service to whomsoever in need
          of medicine database.
        </p>
      </div>
    </div>
  );
};

export default BodyArea;
