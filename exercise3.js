function cariMedian(arr) {
    var hasil = 0
    var i = arr.length
    var j = arr.length/2
    // for(var i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            // j = i/2
            hasil += (arr[j-1] + arr[j]) /2
        } else{
              hasil += (arr[(i-1)/2])
            }
    return hasil
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
