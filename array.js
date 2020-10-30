class ArrayOperations
 {
    constructor() {}
    evenNumber() 
    {
      console.log(" Function to find even number ");
        for (var i = 0; i < arr.length; i++) 
        {
            if (arr[i] % 2 == 0)
             {
                console.log(arr[i]);
            }
        }
    }
    oddNumber() 
    {
        console.log("Function to find odd number");
        for (var i = 0; i < arr.length; i++)
         {
            if (arr[i] % 2 != 0)
                console.log(arr[i])
        }
    }
    perfectNumber() 
    {
        console.log(" Function to find perfect number ");
        for (var k = 0; k < arr.length; k++)
         {
            var temp = 0;
            for (var i = 1; i <= arr[k] / 2; i++)
             {
                if (arr[k] % i === 0) 
                {
                    temp += i;
                }
            }
            if (temp == arr[k] && temp !== 0) 
            {
                console.log(arr[k])
            }
          }
    }
    searchNumber(num)
     {
        console.log(" Function to search a number ");
        for (var i = 0; i < arr.length; i++)
         {
            if (arr[i] == num)
            {
                console.log("Number is Present");
            }
        }
        console.log("number is not present");
    }

}

let arr = [5, 4, 28, 8, 14, 45, 76, 1, 2, 3, 100, 96, 98, 49];
let array = new ArrayOperations();
array.evenNumber();
array.oddNumber();
array.perfectNumber();
array.searchNumber(100);
