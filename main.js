let toggleBtn = document.getElementById("toggle-btn");
let toggleBtnSpan = document.getElementsByClassName("slider")[0];
let monthlyCharges = [19.99, 24.99, 39.99];
let annuallyCharges = [199.99, 249.99, 399.99];
let priceArray = document.getElementsByClassName("price");

toggleBtn.addEventListener('click', (e) => {
    console.log(e.target.checked)
    if(e.target.checked){
        e.target.setAttribute('checked', 'true')
        toggleBtnSpan.setAttribute('aria-label','monthly plan')
        for(let iter=0; iter<3; iter++){
            priceArray[iter].querySelector("span").textContent=" "+monthlyCharges[iter]
        }
    } else {
        e.target.setAttribute('checked', 'false')
        toggleBtnSpan.setAttribute('aria-label','annual plan')
        for(let iter=0; iter<3; iter++){
            priceArray[iter].querySelector("span").textContent=" "+annuallyCharges[iter]
        }
    }
})