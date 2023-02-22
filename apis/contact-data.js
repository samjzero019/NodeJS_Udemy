req.on("data", (chunk) => {
  data.push(chunk);
});

// make fetched data to readable format
req.on("end", () => {
  data = Buffer.concat(data).toString();
  const splited_data = data.split("=");
  console.log("Splited Data: ", splited_data);

  res.write(`<div class="container" style="display: flex; justify-content: center; align-items: center; padding: 2rem">
        <div >
        <span> FirstName:  ${splited_data[1].split("&")[0]}</span>
        <hr> </hr>
        <span> LastName:  ${splited_data[2].split("&")[0]}</span>
        <hr />
        <span> Country: ${splited_data[3].split("&")[0]}</span>
        <hr />
        <span> Subject:  ${splited_data[4]}</span>
        </div>
    </div> `);
});
