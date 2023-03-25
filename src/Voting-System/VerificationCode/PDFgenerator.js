import React, { useEffect, useState } from "react";
import QRGenerator from "./QRGenerator";
import PDFcomponent from "./PDFcomponent";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Spinner } from "@chakra-ui/react";

export default function PDFgenerator({ voterId, code }) {
  const [dataURL, setDataURL] = useState("");

  useEffect(() => {
    setDataURL(document.getElementById("qr-code").toDataURL());
  }, []);

  return (
    <div className="pdf-download-wrapper">
      <div className="qr-generator-wrapper">
        <QRGenerator voterId={voterId} />
      </div>

      <PDFDownloadLink
        document={<PDFcomponent dataURL={dataURL} code={code} />}
        fileName="Verification-Code_GE2023.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? <Spinner size="sm" mr={"1rem"} /> : "Download"
        }
      </PDFDownloadLink>
    </div>
  );
}
