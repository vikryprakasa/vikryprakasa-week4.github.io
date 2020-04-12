function changeMe(arr) {
    var num = 0
    for(var i = 0; i < arr.length; i++){
        console.log(`${++num}. ${arr[i][0]} ${arr[i][1]}`)
        var hasil = {}
        hasil['firstName '] =arr[i][0],
        hasil['lastName'] = arr[i][1],
        hasil['gender'] = arr[i][2],
        hasil['age'] =  2020 - arr[i][3]
        
    if(arr[i][3] != 0){
        hasil['age']='Invalid Birth Year'
    }
    console.log(hasil);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""