const styledMailData = (Items) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-size:1.1rem;">
      ${Items.map(
        (item, index) =>
          `<fieldset>
            <legend><b>${index + 1}</b></legend>
            <p><b>Name:</b> ${item.name}</p>
            <p><b>Mobile No:</b> ${item.mobile}</p>
            <p><b>Email:</b> ${item.email}</p>
            <p><b>Hobbies:</b></p>
            <ol>
              ${item.hobbies.map((hobby) => `<li>${hobby}</li>`).join("")}
            </ol>
          </fieldset>
          <br/>`
      ).join("")}
      </body>
    </html>`;
};

module.exports = styledMailData;
