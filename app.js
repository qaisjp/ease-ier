function main() {
    const newHTML = `
<div class="form-group required">
	<label for="password" class="control-label">Password</label>
    <input
        type="password"
        name="password"
        id="password"
        class="form-control input-lg" autocomplete="off"
        autocapitalize="off" required="required" tabindex="1"
    >
</div>`
    const help = document.querySelector(".help-block")
    help.innerHTML = newHTML

    const form = help.closest("form")
    form.setAttribute("action", "/cosign.cgi")

    console.log("Old EASE has fixed this page.")
}
window.addEventListener("load", main);
