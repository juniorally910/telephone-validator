const userInput=document.getElementById("user-input");
const results=document.getElementById("results-div");
const buttonContainer=document.getElementById("button-container");
const clearBtn=document.getElementById("clear-btn");
const checkBtn=document.getElementById("check-btn");

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;

function addResult(){
  const inputValue=userInput.value.trim();
  if(inputValue === ''){
    alert("Please provide a phone number");
    return;
  }


    const li = document.createElement("li");
    if(phoneRegex.test(inputValue)){
      li.textContent=`Valid US number: ${inputValue}`
    }
    else{
      li.textContent=`Invalid US number: ${inputValue}`
    }
    results.appendChild(li);

    userInput.value="";
    userInput.focus();

}

function clearResults(){
  results.innerHTML="";
  userInput.focus()
}
checkBtn.addEventListener("click",addResult);
clearBtn.addEventListener("click", clearResults);



