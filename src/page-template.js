//create & call functions for each role's card

//if statements for each role

const generateHTML = (teamMembers) => {
    for (i=0; i<teamMembers.length; i++) {
        console.log(teamMembers[i])
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hello World</h1>
        <h2> ${teamMembers} </h2>
        </div>
        </div>
    </body>
    </html>`
}

module.exports= generateHTML;