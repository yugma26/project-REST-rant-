const React = require('react')
const Def = require('../default')


function show (data) {
  let comments =  (              
      <h3 className="inactive">
        no comments yet !
      </h3>
    )

    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = math.round(sumRatings / data.place.comments.length)
      for (let i = 0; i < averageRating; i++) {
        stars += 'â­ï¸'
      }
      rating = (
        <h3>
      {stars} stars
    </h3>
  )
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
             <form method="POST" action={`/places/${data.place.id}/comment/$(c.id)?_method=DELETE`}> 
            <input type="submit" className="btn btn-danger" value="delete comment"/>
                Delete 
           </form>
           <hr />
          <h3>rating</h3>
          {rating} 
          <h2>comments</h2>
           {comments}
          </main>
        </Def>
    )

}
module.exports = show()
  






