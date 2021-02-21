let modal = document.querySelector('.modal');
let generateNum = document.querySelector('.btn-success');
let number = document.querySelector('.number');
let retry = document.querySelector('.btn-primary');
let close = document.querySelector('.btn-secondary');


retry.addEventListener('click', function(){
    uniqueNums = [];
    modal.style.display = 'none';
    number.innerHTML = '?';
})

close.addEventListener('click', function() {
    modal.style.display = 'none';
})

generateNum.addEventListener('click', getRandomNum);


let nums = [10,2,7,9,5,6,3,8,4,1];
let uniqueNums = [];

 function getRandomNum() {
        if (nums.length === uniqueNums.length) {
            return modal.style.display = 'block';
        }

        let index = Math.floor(Math.random() * (nums.length));

        if(uniqueNums.length === 0 ) {
            uniqueNums.push(nums[index]);
            return number.innerHTML = nums[index];
        } 
    
        if (uniqueNums.includes( nums[index])) {
           return getRandomNum();
            
        } else {
            uniqueNums.push(nums[index]);
            return number.innerHTML = nums[index];
        }
      
}












