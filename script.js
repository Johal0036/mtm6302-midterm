const mission = document.getElementById("story1")
const lunch = document.getElementById("story2")
const weather = document.getElementById("story3")

// Connects with the form on the html
const form = document.getElementById("form")
// connects with the buttons on the html file
const button = document.getElementById("buttonscontainer")
// this will show the results of the stories
const result = document.getElementById("result")
// this will have the button to start over
const refresh = document.getElementById("refresh")

mission.addEventListener("click", function () {
    this['stories' [0]]; // this line will retrieve the information from the stories.js file
    form.innerHTML = `<h2>Fill out the fields below to complete the story.</h2>
    <input type="text" name="Adjective" placeholder="Adjective"></input>
    <input type="text" name="Verb 1" placeholder="Verb 1"></input>
    <input type="text" name="Verb 2" placeholder="Verb 2"></input>
    <input type="text" name="Plural Noun 1" placeholder="Plural Noun 1"></input>
    <input type="text" name="Plural Noun 2" placeholder="Plural Noun 2"></input>
    <input type="text" name="Plural Noun 3" placeholder="Plural Noun 3"></input>
    <button id="storybtn" class="btn" type="submit">Generate Story</button>`
})

lunch.addEventListener("click", function () {
    this['stories' [1]];
    form.innerHTML = `<h2>Fill out the fields below to complete the story.</h2>
    <input type="text" name="Animal" placeholder="Animal"></input>
    <input type="text" name="Adjective 1" placeholder="Adjective 1"></input>
    <input type="text" name="Adjective 2" placeholder="Adjective 2"></input>
    <input type="text" name="Vegetable 1" placeholder="Vegetable 1"></input>
    <input type="text" name="Vegetable 2" placeholder="Vegetable 2"></input>
    <input type="text" name="Noun" placeholder="Noun"></input>
    <input type="text" name="Container" placeholder="Container"></input>
    <button id="storybtn" class="btn" type="submit">Generate Story</button>`
})

weather.addEventListener("click", function () {
    this['stories' [2]];
    form.innerHTML = `<h2>Fill out the fields below to complete the story.</h2>
    <input type="text" name="Adjective 1" placeholder="Adjective 1"></input>
    <input type="text" name="Adjective 2" placeholder="Adjective 2"></input>
    <input type="text" name="Article of Clothing" placeholder="Article of Clothing"></input>
    <input type="text" name="Number 1" placeholder="Number 1"></input>
    <input type="text" name="Number 2" placeholder="Number 2"></input>
    <input type="text" name="Plural Noun 1" placeholder="Plural Noun 1"></input>
    <input type="text" name="Plural Noun 2" placeholder="Plural Noun 2"></input>
    <button id="storybtn" class="btn" type="submit">Generate Story</button>`
})

button.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
        result.dataset.id = e.target.dataset.id
        form.style.display = "block"
        form.innerHTML = this.stories[e.target.dataset.id].form
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault() // the page will not refresh

    const inputs = []
    for (const input of form) {
        if (input.name) {
            inputs[input.name] = input.value
        }
    }
    result.style.display = "block"
    result.innerHTML = stories[result.dataset.id].output(inputs) // this line will generate the mad libs story
    refresh.style.display = "block"
})

// refreshing the mad libs to start over
// everything will be hidden on css / styles
refresh.addEventListener("click", function () {
    form.style.display = "none";
    result.style.display = "none";
    refresh.style.display = "none"
})