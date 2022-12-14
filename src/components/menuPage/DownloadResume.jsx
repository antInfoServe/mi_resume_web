import React from "react";
import DownloadPdfVector from '../../assets/download_pdf_vector.svg'
import { PDFDownloadLink } from "@react-pdf/renderer";


const DownloadResume = ({ staticText, Document, resumeData, resumeOrder, handleModal }) => {
    return (
        <div className="box_modal_small">
            <div className="box_flex_row_right">
                <button className="button_link" onClick={() => handleModal(false)}>
                    {staticText.closeModal}
                </button>
            </div>
            <div className="box_flex_col">
                <img src={DownloadPdfVector} alt="download resume in pdf format" />
                <PDFDownloadLink document={<Document resumeData={resumeData} resumeOrder={resumeOrder} />} fileName="mi_resume_dot_org.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? null : <button className="button_regular" onClick={() => gtag('event', 'click', {
                            'event_category': 'menuPage',
                            'event_label': 'download resume'
                        })}>{staticText.download}</button>}
                </PDFDownloadLink>
            </div>
        </div>
    );
};


export default DownloadResume