import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from '../Files/CrimenInMexico.pdf';
import {Container} from "reactstrap";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


//http://Localhost:3000/Files/CrimenInMexico.pdf

function CrimeInMeexico() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <Container style={{marginLeft:"30%",marginRight:"30%", marginTop:"70px" }}>
            <Document
                file={samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
                renderAnnotationLayer={false}
            >
                <Page renderAnnotationLayer={false} pageNumber={pageNumber} />
            </Document>
            <div>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </Container>
    );
}


export default CrimeInMeexico