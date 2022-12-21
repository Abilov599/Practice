const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      //   console.log(catList);
      let catData = document.querySelector(".row");
      catData.innerHTML += `
      <div class = "col-3">
                <div class="card mb-4" style="width: 17rem;">
        <img style= "height :250px"  src="${data[i].image?.url}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <div class= "box"><p class="card-text">${data[i].description} </p></div>
        </div>
        <a href="${data[i].wikipedia_url}" class="btn btn-primary" style="margin-left: 10%; width:80%">Go to offical website</a>
        </div>
        </div>`;
    }
  });
