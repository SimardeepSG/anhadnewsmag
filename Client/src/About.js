import Varrow from "./Varrow";
import "./styles/about.css";

const About = () => {
  return (
    <div className="aboutencompassingall">
      <div className="abouttitle">About</div>
      <div className="aboutmainbody">
        <div className="aboutcolumn1">
          <div className="aboutmission">
            <h1>Mission</h1>
            <p>
              Anhad is a student-run Sikh print and multimedia magazine that
              draws upon the Singh Sabha Movement’s essence to create spiritual,
              political, and historical pieces. Through our crowdsourcing model,
              we seek to inspire a new wave of Sikh literacy, love, and
              connectedness with our Guru.
            </p>
          </div>

          <div className="aboutvision">
            <h1>Vision</h1>
            <p>
              As a multimedia discussion starter found in every home, Anhad
              envisions a literary renaissance elevating Sikh creativity and
              journalism through an approachable community forum rooted in
              Gurbani, history, and Sikh principles.
            </p>
          </div>
          <div className="aboutstatus">
            <h1>Status</h1>
            <p>
              We are an official 501c(3) in the United States of America which
              qualifies us to a be a tax-exempt nonprofit. Our California
              state-specific nonpofit status is still pending. Our EIN # is
              87-2191370.
            </p>
          </div>
        </div>
        {/* --------------------------------------- */}
        <div className="aboutcolumn2">
          <div className="aboutidentity">
            <h1>Identity</h1>
            <p>
              Anhad is the celestial sound heard by the soul after the entrance
              of the Dasam Duar. It rings monotonously and represents multiple
              spiritual states as explained in our Granth: living, death, and
              awakening. It is the sound of the cosmos and human consciousness,
              transcending space and time–– a sound with no beginning or end.
              emphasizes divine connectivity and the effort it takes to reach
              such a high-awareness spiritual state. Anhad Magazine hopes to
              emulate the love a Sikh has for reaching such connectivity and
              awareness, only to hear God's sound. Our magazine is meant to be a
              place for Sikhs to use literacy and research to produce new levels
              of consciousness to understand their creator in an environment of
              love and growth.
            </p>
          </div>
          <div className="aboutschedulecall">
            <h1>Schedule a Call</h1>
            <p>
              The fastest way to get in touch with us!
              <ul>
                <li>calendly.com/anhadmagazine </li>
                <li>Call/Text us at (773) 609-1406 (U.S. #'s only)</li>
              </ul>
            </p>
          </div>
        </div>
        {/* ------------------------------------------- */}

        <div className="aboutcolumn3">
          <div className="aboutemail">
            <h1>Email</h1>
            <ul>
              <ul>
                For information about magazine content, sources, issues, or
                submissions, please contact: editor@anhadmagazine.com
              </ul>

              <li>
                For information about our PR list, joining our PR list, social
                media, press releases/statement, please contact:
                outreach@anhadmagazine.com
              </li>

              <li>
                For information on donations, IRS 990 forms, and more, please
                contact: finance@anhadmagazine.com
              </li>

              <li>
                For information regarding your package (tracking/mailing),
                sponsorships, printing, and more, please contact:
                logistics@anhadmagazine.com
              </li>

              <li>
                For all general inquiries such as applying to staff, an issue
                with the website, organization information, please contact:
                info@anhadmagazine.com
              </li>
            </ul>
          </div>
        </div>
        {/* ----------------------------------- */}
      </div>
    </div>
  );
};

export default About;
