//form listener
document.querySelector('#generate-names').addEventListener('submit', loadName)
// variables


function loadName(e) {
    e.preventDefault()
    // get country and genre
    const country = document.querySelector('#country').value,
        genre = document.querySelector('#genre').value
    let url = 'https://namefake.com/'
    if (country !== '') {
        url += (country + '/')
    }
    else {
        url += 'random/'
    }
    if (genre !== '') {
        url += (genre + '/')
    }
    else {
        url += 'random/'
    }
    httpRequest(url)
}
//ajax
function httpRequest(url) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.response())
        }
    }
    xhr.send()
}