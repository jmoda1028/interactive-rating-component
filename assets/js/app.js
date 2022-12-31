const btnSubmitRate = document.getElementById("submit-rating");
const rateContainer = document.querySelector('main .card');
const thanksContainer = document.querySelector("main .thanks-container");
const ratings = document.querySelectorAll("#rate-btn")
const actualRating = document.querySelector("#rating")

let rate = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    rate = e.target.innerHTML;
    console.log(rate);
  })
})

btnSubmitRate.addEventListener("click", () => {
    if(rate){
      actualRating.innerHTML = rate;
    }
    
    rateContainer.style.display = "none";
    thanksContainer.style.display = "flex";
})