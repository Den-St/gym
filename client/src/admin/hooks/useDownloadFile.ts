import axios from "../../axios";

export const useDownloadFile =  () =>{
    const upload = async (file:Blob | string) => {
        try {
            if(!file) return false
            const manFormData = new FormData();
            manFormData.append('image',file);

            const {data} = await axios.post('/upload',manFormData);
            console.log(data)
            return data.url;
        }catch (err){
            console.log("file uploading err",err)
        }

    }
    return {upload}
}