/**
 * @license MIT
 * @copyright 2023 Baris Adsiz
 * @author Baris Adsiz <barisadsiz45@gmail.com>
 */

"use strict";

function sendMail(){
    (function(){
        emailjs.init("D_P7exzCBlIFSdogk");
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        to: document.querySelector("#to").value,
        subject: document.querySelector("#subject").value,
        replyto: document.querySelector("#replyto").value,
        message: document.querySelector("#message").value
    };

    var serviceID = "service_9lknwb5";
    var templateID = "template_urnc4aw";

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Thank you," + params['sendername'] + "! Your message has been sent.");
    })
    .catch();
}