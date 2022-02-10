fetch('https://newsapi.org/v2/everything?q=Cryptocurrency&from=2022-01-26&sortBy=popularity&apiKey=69a0a6f3f8aa429bb328b853d7f6fe0c')

    .then(response => response.json())
    .then(data => {

        const x = document.querySelector('#cards');

        article = data.articles;

        for (let i = 0; i < 4; i++) {
            x.innerHTML += `<div class="card" style="width: 18rem; margin: 10vh 0;">
        <img src="${article[i].urlToImage}" class="card-img-top" alt="can't load">
        <div class="card-body">
          <h5 class="card-title"><b>Author:</b> ${article[i].author}</h5>
          <p class="card-text">${article[i].title}</p>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            Know more
          </button>
        </div>
      </div>
      
      <div class="offcanvas offcanvas-start" style="width: 80vw; height: 80vh;" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel"><b>${article[i].title}</b></h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <img src="${article[i].urlToImage}" style="width: 40vw;border: 2px solid;" alt="can't load image">
            <br>
            <br>
            ${article[i].description}
            ${article[i].content}
            <a href="${article[i].url}"  target="_blank" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
`
        }

        console.log(article);
    });