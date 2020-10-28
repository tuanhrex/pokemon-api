fetch('https://api.spacexdata.com/v3/dragons/dragon2')
.then(response => {
    console.log(response);
    return response.json();
})

.then(dragonTwoData => {
    console.log(dragonTwoData)

})

.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/missions/F3364BF')
.then(response => {
    console.log(response);
    return response.json();
})

.then(dragonTwoData => {
    console.log(dragonTwoData)

})

.catch(error => {
    console.log(error);
})


fetch('https://api.spacexdata.com/v3/rockets/falcon1')
.then(response => {
    console.log(response);
    return response.json();
})

.then(dragonTwoData => {
    console.log(dragonTwoData)

})

.catch(error => {
    console.log(error);
})
