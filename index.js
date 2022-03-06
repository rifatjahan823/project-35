// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 
setTimeout(() => {
    console.log("settimeout")
}, 3000);

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
const showPrompt=()=>{
    const number = prompt("Give Your Number")
    if(number>0){
        alert("GYour Number"+parseFloat(number)+parseFloat(200))
    }
    else if(number<0){
       const numbers = prompt("Give Your Positive Number")
        if(numbers>0){
            alert(parseFloat(numbers)+parseFloat(200))
        }
        else if(numbers<0){
            alert("you are wrong")
        }
    }
    else if(number!=""){
        alert('please give only number')
    }
}

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
const showConfirm=()=>{
    const location = confirm("do you want to see your website location");
    if(location===true){
      console.log("The URL of this page is: " + window.location.href);
    }
}


// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 

//save value in ui from locatstorage
const displayCart =()=>{
    const cart = localSet();
    for(const name in cart){
        showProduct(name)
    }
}

const inputFuntion = (name)=>{
    const input = document.getElementById(name);
    inputName = input.value; 
    if(!inputName ){
        return
    }
       //display ui
       showProduct( inputName )
       //display locatstorage
       inputToLocal (inputName )
       input.value=""
       return inputName
}
const addItem =()=>{
  inputFuntion("input1")
  inputFuntion("input2")

}
//create element for ui
const showProduct = name =>{
    const product = document.getElementById("product");
    const li = document.createElement("li");
    li.innerText=name;
    product.appendChild(li)
}

//set localstorage
 const localSet = ()=>{
     const cart = localStorage.getItem("cart");
     let cartObj;
     if(cart){
         cartObj=JSON.parse(cart)
    }
     else{
         cartObj={};  
     }
     return cartObj;
 }
 const inputToLocal = name =>{
     const getValue = localSet();
     if(getValue[name]){
         getValue[name]=getValue[name]+1
    }
     else{
         getValue[name]=1
     }
    console.log(getValue)
    const stingify = JSON.stringify(getValue);
    localStorage.setItem("cart",stingify)
}
displayCart()