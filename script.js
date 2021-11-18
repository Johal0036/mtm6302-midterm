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
    formHtmlBuilder(0);
})

lunch.addEventListener("click", function () {
    formHtmlBuilder(1);
})

weather.addEventListener("click", function () {
    formHtmlBuilder(2);
})

function formHtmlBuilder(index) {
    form.innerHTML = `<h2>Fill out the fields below to complete the story.</h2>
    <input type="text" name="${stories[index].words[0]}" placeholder="${stories[index].words[0]}"></input>
    <input type="text" name="${stories[index].words[1]}" placeholder="${stories[index].words[1]}"></input>
    <input type="text" name="${stories[index].words[2]}" placeholder="${stories[index].words[2]}"></input>
    <input type="text" name="${stories[index].words[3]}" placeholder="${stories[index].words[3]}"></input>
    <input type="text" name="${stories[index].words[4]}" placeholder="${stories[index].words[4]}"></input>
    <input type="text" name="${stories[index].words[5]}" placeholder="${stories[index].words[5]}"></input>
    <button id="storybtn" class="btn" type="submit">Generate Story</button>`
    form.dataset.id = index;
}


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
    const word = stories[form.dataset.id].title
    result.innerHTML = stories[form.dataset.id].output(inputs) // this line will generate the mad libs story
    refresh.style.display = "block"
})

// refreshing the mad libs to start over
// everything will be hidden on css / styles
refresh.addEventListener("click", function () {
    form.style.display = "none";
    result.style.display = "none";
    refresh.style.display = "none"
})