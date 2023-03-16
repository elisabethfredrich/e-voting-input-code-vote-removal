
export const downloadFile = (content, title) => {
  var element = document.createElement("a");
  element.setAttribute("href", content);
  element.setAttribute("download", title);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export function slideOut() {
  document.querySelector("#info-banner").style.width = "8rem";
  document.querySelector("#info-banner").style.marginRight = "-2vw";
  document.querySelector("#info-banner").style.animationFillMode = "none";
  document.querySelector("#info-banner").style.alignItems = "flex-start";
  document.querySelector("#banner-text").style.display = "none";
  document.querySelector("#survey-button-horizontal").style.visibility =
    "hidden";
  document.querySelector("#survey-button-vertical").style.visibility =
    "visible";
  document.querySelector("#survey-button-vertical").style.width = "8rem";
  document.querySelector("#survey-button-vertical").style.width = "8rem";
  document.querySelector("#slideout-trigger").innerHTML = "";
}

export function slideOutMobile() {
  document.querySelector("#info-banner").style.width = "4vw";
  document.querySelector("#info-banner").style.marginRight = "-2vw";
  document.querySelector("#info-banner").style.animationFillMode = "none";
  document.querySelector("#info-banner").style.alignItems = "flex-start";
  document.querySelector("#banner-text").style.display = "none";
  document.querySelector("#survey-button-horizontal").style.visibility =
    "hidden";
  document.querySelector("#survey-button-vertical").style.visibility =
    "visible";
  document.querySelector("#survey-button-vertical").style.width = "8rem";
  document.querySelector("#survey-button-vertical").style.width = "8rem";
  document.querySelector("#slideout-trigger").innerHTML = "";
}