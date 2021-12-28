import "./styles/gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-bg">
      {/* <ul>
          <li><span>home</span></li>
          <li><span>products</span></li>
          <li><span>services</span></li>
          <li><span>contact</span></li>
         </ul> */}

      <div className="left-div">
        <div className="title">
          <h1> The Time Edition Virtual Gallery</h1>
        </div>

        <div className="subtext">
          <h1> Submissions by Sikhs around the world.</h1>
        </div>

        <div className="submit-button">
          <button> Submit Here </button>
        </div>

        <div className="small-text">
          <p> Click and scroll right to explore more</p>
        </div>
      </div>

      <div className="Time-Edition">
        <div className="item">
          <div className="item-img">
            <img src="https://i.imgur.com/2pGPLrl.png"></img>
            <div className="item-description">
              <p> Image sample text 1</p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="item-img">
            <div className="item-description"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-img">
            <div className="item-description"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-img">
            <div className="item-description"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-img">
            <div className="item-description"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
