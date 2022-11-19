
const React = require('react')


function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def
