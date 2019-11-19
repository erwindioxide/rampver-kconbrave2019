 function validatorFN() {
     var x = document.getElementById("FN");
     x.value = (x.value.toUpperCase()).replace(/^\s+/g, '');
     output = (x.value).split(" ").join("");
     xoutput = output.search("=")
     if (xoutput != -1) {
         document.getElementById("errMsgFN").classList.remove('d-none');
         document.getElementById("trigger").classList.add('d-none');
     } else {
         document.getElementById("trigger").classList.remove('d-none');
         document.getElementById("errMsgFN").classList.add('d-none');
     }
 };

 function validatorLN() {
     var x = document.getElementById("LN");
     x.value = (x.value.toUpperCase()).replace(/^\s+/g, '');
     output = (x.value).split(" ").join("");
     xoutput = output.search("=")
     if (xoutput != -1) {
         document.getElementById("errMsgLN").classList.remove('d-none');
         document.getElementById("trigger").classList.add('d-none');
     } else {
         document.getElementById("trigger").classList.remove('d-none');
         document.getElementById("errMsgLN").classList.add('d-none');
     }
 };

 function validatorEmail() {
     var x = document.getElementById("emailOne");
     x.value = (x.value.toLowerCase()).replace(/^\s+/g, '');
     output = (x.value).split(" ").join("");
     xoutput = output.search("=")
     if (xoutput != -1) {
         document.getElementById("errMsgEmail").classList.remove('d-none');
         document.getElementById("trigger").classList.add('d-none');
     } else {
         document.getElementById("trigger").classList.remove('d-none');
         document.getElementById("errMsgEmail").classList.add('d-none');
     }
 };

 function validatorWL() {
     var x = document.getElementById("WL");
     x.value = (x.value.toUpperCase()).replace(/^\s+/g, '');
     output = (x.value).split(" ").join("");
     xoutput = output.search("=")
     if (xoutput != -1) {
         document.getElementById("errMsgWL").classList.remove('d-none');
         document.getElementById("trigger").classList.add('d-none');
     } else {
         document.getElementById("trigger").classList.remove('d-none');
         document.getElementById("errMsgWL").classList.add('d-none');
     }
 };


 function preloader() {
     document.getElementById("trigger").addEventListener("click", function() {
         // document.getElementById("preloader").classList.remove('d-none');
         // setTimeout(() => {
         //     document.getElementById("preloader").classList.add('d-none');
         // }, 7000);
         alert("hello!");
     });
 }