
const rootPath = require("../utils/getRootPath")

exports.get404Page = (req, res, next) => {
    //# can omit path as it not required
    res
        .status(404)
        .sendFile(path.join(rootPath, "views", "404.html")); // using path.join() instead of concating directly slashed path so that this could work for both linux and windows path
} 