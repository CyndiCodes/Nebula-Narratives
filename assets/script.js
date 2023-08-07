let nasaBox = document.getElementById('nasa-images')
let newNasaButton = document.getElementById('new-image')

function getNasa() { 
    // calls nasa api for an image of the day and makes new img element
    fetch (`https://api.nasa.gov/planetary/apod?api_key=p027dcXDBzAB1YTjEeaiAA2djDcIYC5joRZl66GR&count=1`)
    .then(response => response.json())
    .then (data => {
    
        let nasaImg = document.createElement('img')
        nasaImg.src = data[0].hdurl
        nasaBox.append(nasaImg)
    })
}

// get new image when user clicks button
newNasaButton.addEventListener('click', function (event) {
    event.preventDefault()
    getNasa();
    nasaBox.textContent = ''
})
// commented load function out to save daily api calls
// getNasa();


fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
.then(function(response){
    
return response.json()     
})
.then(function (quoteIndex) {
    console.log(quoteIndex)
    let displayQuote = quoteIndex.data[0].quoteText;
    let quoteEl = document.getElementById("quotes");
    quoteEl.textContent = displayQuote;

})
