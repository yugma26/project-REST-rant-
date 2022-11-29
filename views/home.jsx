const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/istockphoto-1327682813-612x612.jpg"  alt="chia fruit shake" />
                <img src="/images/287.jpg"  alt="404 page cat" />
              <div>
                photo by <a href="AUTHOR_LINK">brenda godinez</a> on <a href="UNSPLASH_LINK">unsplash</a>
              </div>
              </div>
              <a href="/places">
                  <button className="btn btn-primary">Places Page</button>
               </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
