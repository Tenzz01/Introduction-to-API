const image = document.querySelector('img')
const randomImg = document.querySelector('.random-img')



randomImg.addEventListener('click' , ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
        console.log("Got the Data");
        // console.log(json);
        console.log(json.message);
        image.src = json.message
    })
})

