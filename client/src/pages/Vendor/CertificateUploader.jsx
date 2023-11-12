/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import VendorService from "../../services/VendorService";

const uploader = Uploader({
    apiKey: "free"
});

const uploaderOptions = {
    showFinishButton: true,
    styles: {
        colors: {
            primary: "#2998FF"
        }
    }
};

const CertificateUploader = ({certificate,setCertificate}) => {
    const [fileUrl, setFileUrl] = useState(null);

    const handleUploadComplete = (files) => {
        if (files.length > 0) {
            const filePath = files[0].filePath;
            const url = uploader.url(filePath, 'thumbnail');
            setFileUrl(url);
            setCertificate({...certificate,"certificate":url});
        }
    };
    return (
        <>
            {/* <div className="fixed flex justify-center items-center top-20 z-10 bg-opacity-70 left-0 bg-black h-screen w-screen"> */}
            <div className=" flex items-center w-24 object-cover justify-center mx-auto">
                <UploadDropzone 
                    className="bg-white rounded-xl flex justify-center items-center"
                    uploader={uploader}
                    options={uploaderOptions}
                    onComplete={handleUploadComplete}
                    height="300px"
                />
            </div>
            {/* </div> */}
        </>
    );
};

export default CertificateUploader;