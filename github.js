const container = document.querySelector('.container');


fetch('https://api.github.com/users/tuanhrex')
.then(response => {
    console.log(response);
    return response.json();
})

.then(githubData => {
    const tuanhObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name

    }
    console.log(tuanhObj);
    // console.log(githubData)

    const newElement = document.createElement('p');
    newElement.textContent = tuanhObj.name;
    // append new element to container
    container.appendChild(newElement);


})

.catch(error => {
    console.log(error);
})


