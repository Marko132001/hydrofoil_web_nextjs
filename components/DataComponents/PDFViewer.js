import React, {useState} from 'react';
import {Document, Page, pdfjs } from 'react-pdf';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function PDFViewer( {element} ) {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Document file={ `${'http://localhost:1337'}${element.pdf.data.attributes.url}` } onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        
            <nav className="slider-nav">
                <ul>
                    <li className="arrow">
                        <button className="previous">
                            <span>
                                { pageNumber > 1 && <FaArrowAltCircleLeft className="left-arrow" onClick={changePageBack}/>}
                            </span>
                        </button>
                    </li>
                    <li className="arrow">
                        <button className="next">
                            <span>
                                { pageNumber < numPages && <FaArrowAltCircleRight className="right-arrow" onClick={changePageNext}/>}
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>      
      
    </div>
  );

}

export default PDFViewer