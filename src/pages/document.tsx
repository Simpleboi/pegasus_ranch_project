import React from "react";
import "../styles/document.scss";
import docOne from "/assets/images/menuOne.jpg";
import docTwo from "/assets/images/menuTwo.jpg";
import docThree from "/assets/images/menuThree.jpg";
import docFour from "/assets/images/menuFour.jpg";

interface DocumentCardProps {
  url: string;
  image: string;
  downloadName: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  url,
  image,
  downloadName,
}) => {
  return (
    <div className="doc-card">
      <figure className="document-image">
        <img src={image} alt="#" />
      </figure>
      <a href={url} download={downloadName}>
        Download
      </a>
    </div>
  );
};

export const DocumentHeading = () => {
  return (
    <section className="doc-heading">
      <h1>Please Print and Sign Required Documents</h1>
      <p>
        Before bringing your child to Pegasus Ranch, please ensure you have
        printed and signed the necessary documents below. These forms are essential
        for your child's participation and help us maintain a safe and secure
        environment. Click the "Download" button below to access the documents.
        Bring the signed copies with you on the day of your visit. Thank you for
        your cooperation!
      </p>
    </section>
  );
};

export const Document: React.FC = () => {
  return (
    <section id="document" className="document">
      <DocumentCard image={docOne} url={docOne} downloadName="DocumentOne" />
      <DocumentCard image={docTwo} url={docTwo} downloadName="DocumentTwo" />
      <DocumentCard
        image={docThree}
        url={docThree}
        downloadName="DocumentFour"
      />
      <DocumentCard image={docFour} url={docFour} downloadName="DocumentFive" />
    </section>
  );
};
