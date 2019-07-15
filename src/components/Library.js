import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        <div class="container-fluid">
          <div class={"row justify-content-sm-center"}>
        {
          this.state.albums.map( (album, index) =>

            <Link to={`/album/${album.slug}`} key={index}>

              <div class="col-sm-auto">
                <div class="album-polaroid">
                  <img class="library-image" src={album.albumCover} alt={album.title} />
                  <div class="library-album-description">
                    <div class="library-title">{album.title}</div>
                    <div class="library-artist">{album.artist}</div>
                    <div class="library-songs">({album.songs.length} songs)</div>
                  </div>
                </div>
              </div>

            </Link>


          )
        }
        </div>
      </div>
      </section>
    );
  }
}

export default Library;
