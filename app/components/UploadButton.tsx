"use client"

import { CldUploadButton } from "next-cloudinary";

export default function UploadButton(){
    function handleUpload( result:any, widget:any){
        url=${result.info7.url}
        
        widget.close()
    }
    return(
        <CldUploadButton
        onUpload={handleUpload}
        uploadPreset="rj5n7npm"
        />
    )
}