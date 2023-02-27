

const rootPath = require("../utils/getRootPath")

exports.contactPage = (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(rootPath, "views", "contact.html"));
}

exports.handleContactUs = (req, res, next) => {

  const { firstName, lastName, country, subject } = req.body
  res.write(`<div class="container" style="display: flex; justify-content: center; align-items: center; padding: 2rem">
  <div >
  <span> FirstName:  ${firstName}</span>
  <hr> </hr>
  <span> LastName:  ${lastName}</span>
  <hr />
  <span> Country: ${country}</span>
  <hr />
  <span> Subject:  ${subject}</span>
  </div>
</div> `);
  console.log("req.body", req.body)
  res.end()
}