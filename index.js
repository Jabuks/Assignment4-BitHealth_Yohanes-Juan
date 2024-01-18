const url = 'https://covid-193.p.rapidapi.com/statistics?country='
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};

function process(statistics) {
    document.getElementById("active-cases").innerHTML = statistics.cases.active ?? 0
    document.getElementById("new-cases").innerHTML = statistics.cases.new ?? 0
    document.getElementById("recovered-cases").innerHTML = statistics.cases.recovered ?? 0
    document.getElementById("total-cases").innerHTML = statistics.cases.total ?? 0
    document.getElementById("total-deaths").innerHTML = statistics.deaths.total ?? 0
    document.getElementById("total-tests").innerHTML = statistics.tests.total ?? 0
    
}

const search = document.getElementById("search-button")
console.log(search)

search.addEventListener('click' , (e) => {
    e.preventDefault()

    let countryInput = document.getElementById("search-input")
    console.log(countryInput)
    let urls = url + countryInput.value.toLowerCase()
    console.log(urls);
    fetch(urls,options)
    .then((response) => {
        return response.json()
    }).then((statistics) => {
        process(statistics.response[0])
    }).catch((err) =>{
        alert(err)
    })
})


