import React from "react";
import silosect from "./assets/layout/images/silosect.png";

export const AppFooter = () => {
    return (
        <div className="layout-footer">
            <img src={silosect} alt="Logo" height="20" className="mr-2" />
            <span className="font-medium ml-2">Created by Trent Sandoval-Cereceres</span>
        </div>
    );
};

//png original file
// https://www.pngplay.com/image/140408
