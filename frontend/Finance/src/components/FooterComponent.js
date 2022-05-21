import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-3">
            
          </div>
          <div className="col-7 col-sm-4 text-center">
            <h5 className = "text-white bg-dark"> Address</h5>
            <address>
            23-8 Steel Road, Galle
              <br />
              Galle
              <br />
              Sri Lanka
              <br />
              <i className="fa fa-phone fa-lg"></i>: 077 922 6820
              <br />
              <i className="fa fa-fax fa-lg"></i>: 077 897 4511
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:info@mmv.lk">info@mmv.lk</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <br></br>
            <p>
              Copyright 2022 © 𝕮𝖊𝖞𝖑𝖔𝖓 𝕴𝖙𝖎𝖓𝖊𝖗𝖆𝖗𝖞, Galle. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
