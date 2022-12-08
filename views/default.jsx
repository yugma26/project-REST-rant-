
const React = require('react')



function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'
        />
            <link rel="stylesheet" href="/css/style.css"/>      
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">home</a>
                        </li>
                        <li>
                             <a href="/places">places</a>
                        </li>
                        <li>
                            <a href="/places/new">add place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def
