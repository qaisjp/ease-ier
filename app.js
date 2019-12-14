function main() {
    // Get the username group by finding the parent of
    // the help block. Also, delete the help block.
    const help = document.querySelector(".help-block")
    const username_group = help.parentElement
    help.remove()

    // And the password field to the login page
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

    // Change the target of the login form
    const form = pw.closest("form")
    form.setAttribute("action", "/cosign.cgi")
}

window.addEventListener("load", main);
