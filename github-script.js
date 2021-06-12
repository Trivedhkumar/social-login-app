$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        let userName = $("#username").val();
          fetch(`https://api.github.com/users/${userName}`)
              .then(res => res.json())
              .then(data => {
                $("#username").val("")
                  if (data.id) {
                      $(".card").replaceWith(
                          `
                          <div style = "margin:auto;max-width:350px" class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <p class="card-text">${data.bio}</p>
                                <a href="${data.html_url}" target="_blank" class="btn btn-primary">View on github</a>
                            </div>
                            </div>
                          `
                      )
                  } else {
                    alert("error")
                    window.location.href = "/index.html";
                  }
              })
              .catch(error => {
                  alert(error)
                  window.location.href = "/index.html";
        })

  })  
})