import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import PdfTest from '../../pdf/STT_newsletter_vol002issue007.pdf'


const PDF = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    return (
        <div>
            <Document file="https://alternativedaily.s3.amazonaws.com/StockThinkTank/Newsletters/STT_newsletter_vol002issue007.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}

export default PDF
