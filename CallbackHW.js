let browser = 'chrome'
function checkBrowserVersion(callback)
{
    setTimeout(function () {
        let version = browser +  ' 143.0.7499.193'
        callback(version)
    }, 2000)
}

function logBrowserVersion(version)
{
    console.log("Browser Version:"+ version)
}

checkBrowserVersion(logBrowserVersion)