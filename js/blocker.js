chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Block:", details.url)
        return {cancel: true}
    },
    {urls: site},
    ["blocking"]
)

document.oncontextmenu = () => {
    alert("Pls dont try to steal the codes Restricted By Rishab")
    return false;

}

document.onkeydown = e => {
    if(e.key == "F12"){
        alert("Pls dont try to steal the codes Restricted By Rishab")
        return false
    }
    if(e.ctrlKey && e.key == "u") {
        alert("Pls dont try to steal the codes Restricted By Rishab")
        return false
    }
}
