function main() {
    const help = document.querySelector(".help-block")
    const username_group = help.parentElement
    help.remove()

    const pw = document.createElement("div")
    pw.classList.add("form-group", "required")
    pw.innerHTML = `
        <label for="password" class="control-label">Password</label>
        <input
            type="password"
            name="password"
            id="password"
            class="form-control input-lg" autocomplete="off"
            autocapitalize="off" required="required" tabindex="1"
        >`

    username_group.after(pw)

    const form = pw.closest("form")
    form.setAttribute("action", "/cosign.cgi")

    console.log("Old EASE has fixed this page.")
}

window.addEventListener("load", main);
