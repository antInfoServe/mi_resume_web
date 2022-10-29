import React, { useState } from "react";

const WithMenuPage = (container) => {
  return ({ resumeData }) => {

    const [download, setDownload] = useState(false)

    const handleModal = (bool) => {
      setDownload(bool)
    }

    return (
      <>
        <container.MenuList
          staticText={container.staticText}
          useNavigate={container.useNavigate}
          download={download}
          handleModal={handleModal}
          DownloadResume={container.DownloadResume}
          Document={container.StandardResumeDoc}
          resumeData={resumeData}
          PDFDownloadLink={container.PDFDownloadLink}
        />
      </>
    );
  };
};

export default WithMenuPage