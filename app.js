console.log("Hello World!");


var downloadResumeAlert = document.getElementsByTagName("button")[0];
      downloadResumeAlert.addEventListener("click", function (event) {
      alert("Resume downloaded successfully!");
   })

   let name = "Anna Santiago";
   let hasDownloadedResume = false;

   function downloadResume() {
    
      if (!hasDownloadedResume) {
         alert("Resume downloaded successfully!");
         hasDownloadedResume = true;
      } else {
         alert("You have already downloaded the resume.");
      }
    }
    downloadResumeAlert = downloadResume;
    downloadResume;