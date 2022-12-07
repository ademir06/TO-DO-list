const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const ul = document.querySelector(".list")
const remove = document.querySelector(".remove-btn")

btn.addEventListener("click", () => {
    Addnew()
})

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains("check-box")) {
        e.target.parentNode.classList.toggle('line')
    }
})

remove.addEventListener("click", () => {
    ul.innerHTML = ""
    Addnew()
})

function Addnew() {
    if (input.value !== "") {
        let newlist = `<li class="list-group-item d-flex justify-content-between">
<span class="d-flex align-items-center">
<input type="checkbox" class="check-box mx-4">
${input.value}
</span>
<button class="del-btn btn btn-danger ">remov</button>
</li>`
        ul.innerHTML += newlist
        input.value = ""
    }
}

input.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "Enter" :
            Addnew()
            break;
        case 'Shift':
            alert("hello")
    }
})






