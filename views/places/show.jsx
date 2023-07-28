const React = require('react')
const Def = require('../default')
const new_form = require('./new')

function show (data) {
  let comments =  (              
      <h3 className="inactive">
        no comments yet !
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }

    return (
        <Def>
          <main>
            <div className="row">
            </div>
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
           <hr />
          <h2>Comments</h2>
          {comments} 
          </main>
        </Def>
    )

}
module.exports = show()
  

