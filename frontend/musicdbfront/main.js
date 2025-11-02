import {getJson} from "./Modules/awaitJson.js"

document.addEventListener("DOMContentLoaded",()=>
    {
        let sect = document.getElementById("sect1");
        let nav = document.getElementById("nav");
        let sect2 = document.getElementById("sect2")
        getJson("http://localhost/musicdb/allArtist.php")
            .then(file=>
                {
                    console.log(file)
                    file.forEach(element => {
                        let div = document.createElement("div");
                        div.innerHTML = `
                        <h1>${element.name}</h1>
                        <p>${element.genre}</p>
                        <p>${element.country}</p>
                        <img src="./img/${element.image}" alt="">
                        `
                        sect.appendChild(div)
                        let button = document.createElement("button")
                        button.innerHTML = `${element.name}`
                        button.addEventListener("click",()=>
                            {
                                getJson("http://localhost/musicdb/albums.php?art="+element.artist_id)
                                .then(file=>
                                    {
                                        console.log(file)
                                        file.forEach(element => {
                                            sect2.innerHTML = "";
                                            let div = document.createElement("div")
                                            div.innerHTML = 
                                            `
                                                <h1>${element.name}</h1>
                                                <p>${element.release_year}</p>
                                                <p>${element.title}</p>
                                                <img src="./img/${element.image}" alt="">
                                            `
                                            sect2.appendChild(div)//gaming fojtatni  .then songsall
                                        });

                                    })
                            })
                        nav.appendChild(button)
                    });
                })
            getJson("")
            {

            }
    })