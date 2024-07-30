function aboutus() {
    const content = document.getElementById("content-section")
    content.innerHTML =
        `
        <div>      
        <h1>About Us</h1>
        <div class="col-lg-8 px-0">
            <p class="fs-5">For the final project, you must create functional pages for your travel recommendation website using JavaScript. This website will help users discover ideal destinations based on their preferences.

                The website uses interactive displays and provides detailed descriptions and multimedia content. It provides users with a comprehensive overview of each destination, aiding them to make informed travel decisions.
            </p>
            <p>Feel free to Explore our website.</p>
            <div class="d-flex flex-row">
                <h1 class="mx-2">Our Team</h1>
                <div class="namecard card text-white mx-1" style="width: 18rem;">
                 <div class="card-body">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                <h5 class="card-title text-white">John Doe</h5>
                <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div>CEO</div>
                
                </div>
               </div>
               
               <div class="namecard card text-white mx-1" style="width: 18rem;">
                 <div class="card-body">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                <h5 class="card-title text-white">Henry Smith</h5>
                <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div>C0O</div>
                
                </div>
               </div>
               
               <div class="namecard card text-white mx-1" style="width: 18rem;">
                 <div class="card-body">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                <h5 class="card-title text-white">Mark Bridge</h5>
                <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div>CTO</div>
                
                </div>
               </div>
            
            </div></div> `
}


function contactus() {
    const content = document.getElementById("content-section")
    content.innerHTML =

        `   <div>
            <div class="d-flex flex-row">
            <div>
            <h1 class="mb-4">Contact Us</h1>
            <p>Get in touch</p>
            </div>
            
            <form class="namecard rounded px-3 py-2 mx-auto">
            <div class="mb-3 ">
    <label for="exampleInputText" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp">
  </div>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label>Message</label>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>            
</div>
`
}

function displayCard(section) {

}

async function searchKeyword() {
    const section = document.getElementById("right-container")
    let destination = document.getElementById("search-text").value.toLowerCase()
    if (destination.includes("beach")) {
        destination = "beaches"
    }
    if (destination.includes("temple")) {
        destination = "temples"
    }
    if (destination.includes("country")) {
        destination = "countries"
    }
    const requestURL =
        "travel_recommendation_api.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const destinations = await response.json();
    section.innerText = ``
    if (destinations[destination]) {

        destinations[destination].forEach((item) => {
            if (destination === "countries") {
                item["cities"].forEach((subitem => {
                    let new_card = document.createElement('div')
                    new_card.innerHTML =
                        `<div class="card namecard" style="width: 18rem;">
  <img src="${subitem["imageUrl"]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${subitem["name"]}</h5>
    <p class="card-text">${subitem["description"]}</p>
    <a href="#" class="btn btn-primary">Go Here</a>
  </div>
</div>`
                    section.appendChild(new_card)
                }))
            } else {
                let new_card = document.createElement('div')
                new_card.innerHTML =
                    `<div class="card namecard" style="width: 18rem;">
  <img src="${item["imageUrl"]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item["name"]}</h5>
    <p class="card-text">${item["description"]}</p>
    <a href="#" class="btn btn-primary">Go Here</a>
  </div>
</div>`
                section.appendChild(new_card)
            }

        })

    } else {
        let testtext = document.createElement('h1')
        testtext.innerText = "No results found"
        section.appendChild(testtext)
    }

}

function clearSearch() {
    const section = document.getElementById("right-container")
    section.innerHTML = ``
}