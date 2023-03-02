
export const downloadFile = (content) => {
    var element = document.createElement("a");
    element.setAttribute("href", content);
    element.setAttribute("download", "General-Election-2023.pdf");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };