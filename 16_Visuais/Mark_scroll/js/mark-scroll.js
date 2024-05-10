(function () {
    window.addEventListener("scroll", destacaMenu)

    const menu = document.querySelector(".nav")
    const links = menu.querySelectorAll("li a")

    function destacaMenu() {
        let positions = [...links].map(link => {

            let href = link.getAttribute("href")

            let h2 = document.querySelector(href)
            return h2.getBoundingClientRect().top
        })

        let linkAtivo = pegaUltimoElementoVisto(positions)
        let menuActived = menu.querySelector(".actived")
        if (menuActived) {
            menuActived.classList.remove("actived")
        }
        if (linkAtivo) {
            return linkAtivo.classList.add("actived")
        }
        return links[0].classList.add("actived")


        console.log(positions)
    }

    function pegaUltimoElementoVisto(_positions) {
        let positions = _positions.filter(n => n < innerHeight / 2)

        return links[positions.length - 1]
    }

    destacaMenu()
})()