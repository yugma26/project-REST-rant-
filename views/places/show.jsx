const React = require('react')
const Def = require('../default')
const new_form = require('./new')

function show (data) {
  let message = ''                 
  if (data.message) {
    message = (
      <h4 className="alert-danger">
        {data.message}
      </h4>
    )
  }
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <h3>located in {data.place.city},{data.place.state}</h3>
            <div>
                <img alt="coding cat cafe" src={data.place.pic} />
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
               Edit
             </a>     
             <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
           </button>
           </form> 
          </main>
        </Def>
    )
}

module.exports = new_form()










