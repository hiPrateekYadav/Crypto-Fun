fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(response => {
    return response.json()
  })
  .then(data => {
    let x = document.querySelector('#info');

    for (let i = 0; i < 30; i++) {
      if (data[i].price_change_percentage_24h < 0) {
        x.innerHTML += `<div class='coin-container'>
            <div class='coin-row'>
              <div class='coin'>
                <img src=${data[i].image} alt='crypto' />
                <h1>${data[i].name}</h1>
                <p class='coin-symbol'>${data[i].symbol}</p>
              </div>
              <div class='coin-data'>
              <p class='coin-price'>Rs.${data[i].current_price}</p>
              <p class='coin-volume'>${data[i].total_volume}</p>
                <p class='coin-percent red'>${data[i].price_change_percentage_24h.toFixed(2)}%</p>
                Mkt Cap: ${data[i].market_cap.toLocaleString()}
            </div>
                </div>
          </div>`;
      } else {
        x.innerHTML += `<div class='coin-container'>
            <div class='coin-row'>
              <div class='coin'>
                <img src=${data[i].image} alt='crypto' />
                <h1>${data[i].name}</h1>
                <p class='coin-symbol'>${data[i].symbol}</p>
              </div>
              <div class='coin-data'>
              <p class='coin-price'>Rs.${data[i].current_price}</p>
              <p class='coin-volume'>${data[i].total_volume}</p>
              <p class='coin-percent green'>${data[i].price_change_percentage_24h.toFixed(2)}%</p>
                Mkt Cap: ${data[i].market_cap.toLocaleString()}
            </div>
                </div>
          </div>`;
      }
    }

    search = () => {

      if (event.keyCode === 13) {
        const y = document.querySelector('.coin-input').value.toLowerCase();
        const z = document.querySelector('#infosearch');
        if (y == "") {
          x.style.display = "block";
          z.style.display = "none";
        } else {
          data.forEach(element => {
            if (y == element.id || y == element.symbol) {
              x.style.display = "none";
              z.style.display = "block";
              if (element.price_change_percentage_24h < 0) {
                z.innerHTML = `<div class='coin-container'>
                    <div class='coin-row'>
                      <div class='coin'>
                        <img src=${element.image} alt='crypto' />
                        <h1>${element.name}</h1>
                        <p class='coin-symbol'>${element.symbol}</p>
                      </div>
                      <div class='coin-data'>
                      <p class='coin-price'>Rs.${element.current_price}</p>
                      <p class='coin-volume'>${element.total_volume}</p>
                        <p class='coin-percent red'>${element.price_change_percentage_24h.toFixed(2)}%</p>
                        Mkt Cap: ${element.market_cap.toLocaleString()}
                    </div>
                        </div>
                  </div>`;
              } else {
                z.innerHTML = `<div class='coin-container'>
                    <div class='coin-row'>
                      <div class='coin'>
                        <img src=${element.image} alt='crypto' />
                        <h1>${element.name}</h1>
                        <p class='coin-symbol'>${element.symbol}</p>
                      </div>
                      <div class='coin-data'>
                      <p class='coin-price'>Rs.${element.current_price}</p>
                      <p class='coin-volume'>${element.total_volume}</p>
                      <p class='coin-percent green'>${element.price_change_percentage_24h.toFixed(2)}%</p>
                        Mkt Cap: ${element.market_cap.toLocaleString()}
                    </div>
                        </div>
                  </div>`;
              }
            }
            // }else{
            //   x.style.display="none";
            //   z.style.display="block";
            //   z.innerHTML = `<b>No Results found.</b>`
            // }
          });
        }
      }
    }


  })





