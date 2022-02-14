let list = [];
if (localStorage.length > 0) {
    list = load();
}

let heart = document.querySelectorAll(".heart");
let info = document.querySelectorAll(".moviedetail");
for (let i = 0; i < heart.length; ++i) {
    heart[i].addEventListener("click", function () {
        let parent = document.querySelector("#likelist");
        console.log(info[i].innerText);
        // div로 묶어서 출력 및 저장하기
        let ele = document.createElement("div");
        ele.setAttribute("class", "likelist_movieinfo")
        let title = document.querySelectorAll(".moviename")[i].innerText;
        ele.setAttribute("id", title);
        let genre = document.querySelectorAll(".genre")[i].innerText.substring(5);
        let director = document.querySelectorAll(".director")[i].innerText.substring(5);
        let playtime = document.querySelectorAll(".playtime")[i].innerText.substring(10);
        ele.innerHTML = title + " | " + genre + " | " + director + " | " + playtime + "분";
        if (list.includes(ele.outerHTML)) {
            document.getElementById(title).remove();
            const index = list.indexOf(ele.outerHTML);
            if (index > -1) {
                list.splice(index, 1);
            }
        }
        else {
            parent.append(ele);
            list.push(ele.outerHTML);
        }
        localStorage.setItem("movies", list);
    }
    )
}

function load() {
    let items = localStorage.getItem("movies");
    let list = items.split(",");
    let likelist = document.getElementById("likelist");
    for (var i = 0; i < list.length; ++i) {
        likelist.innerHTML += items.split(",")[i];
    }
    return list;
}