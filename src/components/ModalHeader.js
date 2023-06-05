import React from "react";
import { LineStyle, ModalFlexBox, ModalHeaderStyle, ModalTitleStyle } from "../styles/ModalStyle";
import ana from "../assets/easel.svg";

const ModalHeader = ({ title }) => {
    return (
        <div style={ModalHeaderStyle}>
            <div style={ModalFlexBox}>
              <img src={ana} alt="analytics logo" />
              <h4 style={ModalTitleStyle}>{title}</h4>
            </div>
            <hr style={LineStyle}></hr>
          </div>
        //     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    )
}

export default ModalHeader;