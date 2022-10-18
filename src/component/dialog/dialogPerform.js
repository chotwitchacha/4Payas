/* eslint-disable no-useless-constructor */
import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import FormPerformance from "../../page/Performance/FormPerformance";


const Dialog = ({showModal}) => {
    return (
        <React.Fragment>
        {showModal && (
            <Modal
              centered
              open={showModal}

          >
            <FormPerformance/>

          </Modal>
           
        )}
      </React.Fragment>


    
    );
}


export default Dialog;
