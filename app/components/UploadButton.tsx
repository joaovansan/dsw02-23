"use client"

import {CldUploadButton} from "next-cloudinary";

export default function CldUploadButton(){
    function handleUpload (result:any,widget:any) {

        widget.close()
   
    }
    return(
        <CldUploadButton
        onUpload=(handleUpload)
        uploadPreset="id"
        />

    )
}