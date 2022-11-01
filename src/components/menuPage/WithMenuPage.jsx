import React, { useState } from "react";

const WithMenuPage = (container) => {
  return ({ resumeOrder, setResumeOrder, resumeData }) => {

    const [download, setDownload] = useState(false)

    const handleModal = (bool) => {
      setDownload(bool)
    }

    const handleMove=(e)=>{
      let arr = [...resumeOrder]
      if(e.target.name === 'moveUp'){
        container.relocator().moveUp(arr, e.target.id)
        return setResumeOrder(arr)
      }
      container.relocator().moveDown(arr, e.target.id)
      return setResumeOrder(arr)
    }
    return (
      <>
        <container.MenuList
          staticText={container.staticText}
          useNavigate={container.useNavigate}
          download={download}
          resumeOrder={resumeOrder}
          handleModal={handleModal}
          DownloadResume={container.DownloadResume}
          Document={container.StandardResumeDoc}
          resumeData={resumeData}
          handleMove={handleMove}
          PDFDownloadLink={container.PDFDownloadLink}
        />
      </>
    );
  };
};

export default WithMenuPage