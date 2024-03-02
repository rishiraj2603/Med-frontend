import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-2 bg-zinc-100 h-96">
        <div className="relative">
          <img src="/footerImg.png" alt="" className={`${style.image}`} />
          <h2 className={`${style.content}`}>
            Stay up-to-date with the <br />
            <strong>latest from Med Life!</strong>
          </h2>
        </div>
        <div className="grid grid-cols-4 my-5">
          <div>
            <h2>Downloads</h2>
            <ul>
              <li>Data Library</li>
              <li>Academic Downloads </li>
              <li>Contact Sales</li>
            </ul>
          </div>
          <div>
            <h2>Learn More</h2>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>Clinical API</li>
              <li>Contact Sales</li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Help Center</li>
              <li>DrugBank Online FAQs</li>
              <li>Contact Support</li>
              <li>Citing DrugBank</li>
              <li>Searching DrugBank</li>
              <li>Other Databases</li>
              <li>Data Sources</li>
            </ul>
          </div>
          <div>
            <h2>Abouts</h2>
            <ul>
              <li>About DrugBank Online</li>
              <li>Wishart Research Group</li>
              <li>Statistics</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-5 ">
        <center>
          Use or redistribution of any Med Life content or data requires a
          license and proper citations. Talk to sales for commercial licensing.{" "}
          Apply for an academic license.
        </center>
      </div>
    </div>
  );
};

export default Footer;
