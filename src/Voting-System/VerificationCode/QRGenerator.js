import React from "react";
import QRCode from "qrcode.react";

export default function QRGenerator({ voterId }) {
  return (
    <div>
      <QRCode
        id={"qr-code"}
        value={`https://e-voting-study-3.netlify.app/verification/${voterId}`}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
      />
    </div>
  );
}
