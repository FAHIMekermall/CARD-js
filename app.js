fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
    const imageContainer = document.getElementById('image');
    imageContainer.innerHTML = `
    <img src="${data.results[0].picture.medium}" alt="">
    `
    image.classList.add('image');
    const name = document.getElementById('name');
    name.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
    console.log(data.results[0].email);
    const address = document.getElementById('address');
    address.innerText = `${data.results[0].location.city} : ${data.results[0].location.country}`
    const info = document.getElementById('info');
    info.innerText = data.results[0].email;
});
document.body.addEventListener('click', function(){
    refreshPage()
})
function refreshPage(){
    window.location.reload();
};

