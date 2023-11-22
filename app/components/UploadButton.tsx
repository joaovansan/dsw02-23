"use client"

import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/router";

export default function UploadButton(){
    const router = useRouter()
    function handleUpload( result:any, widget:any){
        router.push('?url=${result.info7.url}')
        
        widget.close()
    }
    return(
        <CldUploadButton
        onUpload={handleUpload}
        uploadPreset="rj5n7npm"
        />
    )
}