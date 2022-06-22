import "./styles/staff.css";
import PostData from "./data/posts.json";

// import ScriptTag from 'react-script-tag';

const Staff = () => {
  // <ScriptTag type="text/javascript" src="Client\src\owl.js" />

  return (
    <div className="bg">
      <div id="testimonial-slider" className="owl-carousel">
        <div className="wrapper">
          <h1> Anhad Staff </h1>
          <div className="team">
            {/* _____________________________________________ */}
            {PostData.map((PostData, index) => {
              return (
                <div className="team_member">
                  <div className="team_img">
                    <img
                      src="https://i.imgur.com/2pGPLrl.png"
                      alt="Team_image"
                    ></img>
                  </div>
                  <div key={PostData.id}>
                    <h3>{PostData.Name}</h3>
                    <p>{PostData.Title}</p>
                    <p>{PostData.Location}</p>
                    <p>{PostData.Description}</p>
                  </div>
                </div>
              );
            })}
            {/* _____________________________________________ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
