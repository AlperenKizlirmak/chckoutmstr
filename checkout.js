// const taxRate = 0.18;
// const shippingPrice = 15;
// const shippingFreePrice = 300;

window.addEventListener("load", ()=>{
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("shippingFreePrice", shippingFreePrice);
    calculateCartPrice();

});

const productsDiv = document.querySelector(".products");
//Capturing ==> Static Parent ------> Children
productsDiv.addEventListener("click", (e)=>{
    //e.target vs. e.currentTarget
    // alert(e.target.tagName);
    // alert(e.currentTarget.className);
    if(e.target.className === "fa-solid fa-minus"){
        //alert("minus btn clicked");
        if(e.target.nextElementSibling.addEventListenerText > 1) {
            e.target.nextElementSibling.innerText--;
    }
    else{
        if(confirm(`${e.target.closest(".product-info").querySelector("h2").innerText} will be removed!`)){
    }
    else if(e.target.getAttribute("class") == "remove-product"){
        alert("remove btn clicked");
        calculateCartPrice();
    }
    else{
        alert("other element clicked");
    }

});

const calculateProductPrice = (target) =>{
    //each product total calculation
    //productTotalPrice => quantity * price
    const productInfoDiv = target.closest(".product-info");
    console.log(productInfoDiv);
}

const calculateCartPrice = () =>{
    //cart total calculation from all products

}