import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfTest from '../../pdf/STT_newsletter_vol002issue007.pdf'


const PDF = () => {

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    
    // const onDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages)
    // }

    return (
        <div>
            <Document file={pdfTest}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    )
}

export default PDF
