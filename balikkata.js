function balikKata(kata) {
    // tulis jawabanmu di sini
    let tamp = ''
    for(let i=kata.length-1; i>=0; i--){
        tamp+=kata[i]
    }return tamp
   }
   
   // testCase
   console.log(balikKata("Niomic!"))    
   console.log(balikKata("JavaScript"))  
   console.log(balikKata("alohahola"))  
   console.log(balikKata("Jawa_Barat"))  