document.querySelector(".journey-button").addEventListener("click", function(event) {
    event.preventDefault();

    document.body.classList.add("page-exit");

    setTimeout(function() {
        window.location.href = this.href;
    }.bind(this), 700);
});