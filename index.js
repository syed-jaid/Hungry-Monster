const inputValue = document.getElementById('search-input')
const foodDisplay = document.getElementById('food-display')
const foundDisplay = document.getElementById('not-found')

const searchFood = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue.value}`)
        .then(response => response.json())
        .then(data => displayFood(data))

}

const displayFood = (data) => {
    const Allmeals = data.meals;
    // if input Value is correct
    if (Allmeals == null) {
        // if input Value is not correct
        const childh1 = document.createElement('h2');
        childh1.innerHTML = `Searching Food is not available...`
        foundDisplay.appendChild(childh1);
    }
    else {
        // using foreach to get all inner data of array 
        Allmeals?.map(info => {
            // div create 
            const childDiv = document.createElement('div');
            // div inner HTML
            childDiv.innerHTML = `<div class="single-food-div">
        <img class="single-food-img" src=${info.strMealThumb} alt="">
        <h3 class="food-name">
            ${info.strMeal}
        </h3>
    </div>`;
            // appending  Child to the main div 
            foodDisplay.appendChild(childDiv);
        });
    }
}