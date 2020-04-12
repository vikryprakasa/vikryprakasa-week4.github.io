 function angkaPrima(angka) {
        if(angka === 2){
            return true
        }else if (angka === 3){
            return true
        }else if (angka === 1){
            return false 
    
        }
        for(var i = 2, j = 3;  i <  angka,j < angka; i++){
            if(angka % i === 0 || angka % j === 0){
                return false
            }
                return true
        }
    } 
    
    
    
      // TEST CASES
      console.log(angkaPrima(3)); // true
      console.log(angkaPrima(7)); // true
      console.log(angkaPrima(6)); // false
      console.log(angkaPrima(23)); // true
      console.log(angkaPrima(33)); // false
    