let finalResult=0;
let rates = {};
let temp;
let usdVal = document.querySelector("#usd");
let rsVal = 0;
let inputVal = document.querySelector("#userGivenInput");

let button = document.querySelector('.for-Result')
button.addEventListener('click', () => {

    fetch("https://api.exchangerate.host/latest?base=USD")
        .then((responceObj) => responceObj.json())
        .then((dataObjects) => {
            console.log(dataObjects)
            for (let key in dataObjects)
                rates = dataObjects[key];
            console.log(rates)
            for (let key in rates)
                if (key == "INR")
                    rsVal = rates[key];
            console.log("Rupee value is:", rsVal)

            finalResult = inputVal.value;

            console.log(finalResult)
            
    console.log(finalResult)    
    finalResult = eval(rsVal * finalResult);
    console.log(finalResult);
    document.querySelector('#result').value = finalResult;

        })


})
