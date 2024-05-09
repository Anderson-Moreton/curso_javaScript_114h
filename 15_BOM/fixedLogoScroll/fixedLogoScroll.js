(function () {
    const bodyFx = document.getElementsByClassName("fx")

    window.addEventListener("scroll", function () {

        if (pageYOffset > 250 && !bodyFx[0]) {
            document.body.classList.add("fx")
        } else if (pageYOffset <= 250 && bodyFx[0]) {
            document.body.classList.remove("fx")
        }
    })
})()