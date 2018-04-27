var commonHashKey = function (arr,hash) {
    var cmnElements = []; 
    console.log(arr);
    arr.forEach(function (element,index) {
        if(hash[element] && hash[element]!=0) {
            cmnElements.push(element);
            hash[element]=0;
        } else {
            //
        }
    });
    return cmnElements;
};

var countElements = function (arr, hash) {
    console.log("Inside count Elements!");
    arr.forEach(function (element, index) {
        hash[element] = (hash[element] && hash[element]!=0) ? (hash[element]+1) : 1;
    });
    
    console.log("Hashtable");
    hash.forEach(function(element,index) {
        console.log(index)
    });
    
    return hash;
};

var intersection = function(nums1, nums2) {
    var hash_nums1 = [];
    var hash_nums2 = [];
    var nums1_length = nums1.length;
    var nums2_length = nums2.length;
    var sm_array = (nums1_length < nums2_length) ? nums1 : nums2;
    var hash = (nums1_length < nums2_length) ? hash_nums2 : hash_nums1;
    hash_nums1 = countElements(nums1, hash_nums1);
    hash_nums2 = countElements(nums2, hash_nums2);
    var result = commonHashKey(sm_array,hash);
    return result;
};
