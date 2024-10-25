let pageCounter = 1;
const animalContainer = $('#animal-info');
const btn = $('#btn');

btn.on('click', function(){
    $.ajax({
    type: 'GET',
    url: `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`,
    success: function (data) {
        renderHTML(data)
        pageCounter++
        if(pageCounter > 3) {
        btn.addClass('hide-me');
        }
    },

    error: function () {
        console.log('Connection error')
    }
});
})


function renderHTML(data) {
    let htmlString = ''

    data.forEach(function (animal){
        htmlString += `<p> ${animal.name} is a ${animal.species} that likes to eat `
        animal.foods.likes.forEach(function(like, index) {
            htmlString += index === 0 ? like: ` and ${like}`
        })
        htmlString += ' and dislikes '
        animal.foods.dislikes.forEach(function(dislike, index) {
            htmlString += index === 0 ? dislike: `and ${dislike}`
        })
        htmlString += '.</p>'
    })

    animalContainer.append(htmlString)
}