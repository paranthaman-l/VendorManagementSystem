/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

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

const FileUploader = ({ setImageUrl, setShowUploader, handleChange, fileRef }) => {
    const [fileUrl, setFileUrl] = useState(null);

    const handleUploadComplete = (files) => {
        if (files.length > 0) {
            const filePath = files[0].filePath;
            const url = uploader.url(filePath, 'thumbnail');
            setFileUrl(url);
            setImageUrl(url);
            setShowUploader(false);
            handleChange(url);
        }
    };
    useEffect(() => {
        setImageUrl(fileUrl);
    }, [fileUrl]);

    return (
        <>
            <div className="fixed flex justify-center items-center top-20 z-10 bg-opacity-70 left-0 bg-black h-screen w-screen">
                {!fileUrl && (
                    <div ref={fileRef} className="w-[30%] flex justify-center mx-auto">
                        <UploadDropzone
                            className="bg-white rounded-xl"
                            uploader={uploader}
                            options={uploaderOptions}
                            onComplete={handleUploadComplete}
                            height="350px"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default FileUploader;