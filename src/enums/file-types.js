/*const file_icons  = [
    "fa-file",
    "fa-file-archive-o",
    "fa-file-audio-o",
    "fa-file-code-o",
    "fa-file-excel-o",
    "fa-file-image-o",
    "fa-file-o",
    "fa-file-pdf-o",
    "fa-file-powerpoint-o",
    "fa-file-text",
    "fa-file-text-o",
    "fa-file-video-o",
    "fa-file-word-o"];*/
const audio_extensions = ["mp3", "ogg", "wav",".mid"];
const video_extensions = ["mp4", ""];
const word_extensions = ["word","wordx"];
const excel_extensions = ["xls","xlsx"];
const image_extensions = ["png","jpg","gif","bmp","tiff"]

export default {

    
    getIcon(extension){
        var icon = "fa-file";


        if (word_extensions.includes(extension)){
            icon = "fa-file-word"}
        else if (excel_extensions.includes(extension)){
            icon = "fa-file-excel";
        } else if (audio_extensions.includes(extension)){
            icon = "fa-file-audio ";
        } else if (video_extensions.includes(extension)){
            icon = "fa-file-video";}
        else if (image_extensions.includes(extension)){
            icon = "fa-file-image";
        }


        

        return icon;



    },
}