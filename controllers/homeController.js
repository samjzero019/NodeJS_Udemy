const path = require('path')
exports.home = (req, res, next) => {
    res
        .status(200)
        .sendFile(path.join(rootPath, "views", "home.html"));
}