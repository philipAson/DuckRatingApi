const apiUrl = "https://nekos.best/api/v2/waifu";
const fetchButton = document.querySelector("#fetchButton");
const waifuContainer = document.querySelector(".waifuContainer");

fetchButton.addEventListener("click", async e => {
    console.log("click! @" + fetchButton.innerHTML);
    waifuContainer.innerHTML = "";
    const waifuImgContainer = document.createElement("img");

    const waifuImgUrl = await getWaifu();

    console.log(waifuImgUrl)

    waifuImgContainer.setAttribute("src", waifuImgUrl);

    waifuContainer.appendChild(waifuImgContainer);

})

async function getWaifu() {
    const response = await fetch(apiUrl);
    const json = await response.json();

    return json.results[0].url
}

const clearPage = () => {
    mainElement.innerHTML = "";
    currentPage = "1";
}
