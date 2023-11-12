import React from 'react'

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

// eslint-disable-next-line react/prop-types
const File = ({ setImageUrl,imageUrl }) => {
    const [fileUrl, setFileUrl] = useState(imageUrl);

    const handleUploadComplete = (files) => {
        if (files.length > 0) {
            const filePath = files[0].filePath;
            const url = uploader.url(filePath, 'thumbnail');
            setFileUrl(url);
            setImageUrl(url);
        }
    };
    useEffect(() => {
        setImageUrl(fileUrl);
    }, [fileUrl]);

    return (
        <div className="">

            {!fileUrl && (
                <div className="w-[30%] flex justify-center mx-auto">
                    <UploadDropzone
                        className="bg-white rounded-xl"
                        uploader={uploader}
                        options={uploaderOptions}
                        onComplete={handleUploadComplete}
                        height="350px"
                    />
                </div>
            )
            }
        </div>
    )
}

export default File