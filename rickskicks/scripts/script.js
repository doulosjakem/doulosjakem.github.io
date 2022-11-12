/*********************************************************************
***
*Original Author:  Jake Miller                                  *
*Date Created:    11/11/2022                                   *
*Version:        1.0                                        *
*Date Last Modified:     11/12/2022                         *
*Modified by:          Jake Miller                                *
*Modification log:                                  *
        
        Version 0.8 - 11/11/2022 - date object displays for the arrivals to show they are "current" (and therefore trendy).
        Version 1.0 - 11/12/2022 - date object also updates the year for the copyright in the footer
        
        

***
******************************************************************** */

"use strict";

$(function () {
  const today = new Date();
  $("small.getDate").append(
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
  );
  $("small#copyright").append(
    today.getFullYear() + " Rick's Kicks LLC All Rights Reserved"
  );
});
