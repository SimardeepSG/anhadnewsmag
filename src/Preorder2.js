import "./styles/preordertwo.css";
import React from "react";

class Preorder2 extends React.Component {
  state = {
    form1: false,
    form2: false,
    form3: false,
    form4: false,
  };

  render() {
    var Handlechange = (e) => {
      console.log(e);
      if (e === 1) {
        console.log("hello");
        this.setState({ form1: !this.state.form1 });
        this.setState({ form2: (this.form2 = false) });
        this.setState({ form3: (this.form3 = false) });
        this.setState({ form4: (this.form4 = false) });
        console.log(this.state.form1);
        console.log(this.state.f1);
      } else if (e === 2) {
        this.setState({ form2: !this.state.form2 });
        this.setState({ form1: (this.form1 = false) });
        this.setState({ form3: (this.form3 = false) });
        this.setState({ form4: (this.form4 = false) });
      } else if (e === 3) {
        this.setState({ form3: !this.state.form3 });
        this.setState({ form2: (this.form2 = false) });
        this.setState({ form1: (this.form1 = false) });
        this.setState({ form4: (this.form4 = false) });
      } else if (e === 4) {
        this.setState({ form4: !this.state.form4 });
        this.setState({ form2: (this.form2 = false) });
        this.setState({ form3: (this.form3 = false) });
        this.setState({ form1: (this.form1 = false) });
      }
    };

    const f1 = this.state.form1;
    const f2 = this.state.form2;
    const f3 = this.state.form3;
    const f4 = this.state.form4;

    return (
      <div>
        <div className="titleforpreorder">
          <p> Pre-Order the Time Edition </p>
        </div>

        <div className="boxes">
          <div className="left">
            <div className="box1" onClick={(param) => Handlechange(1)}>
              <p>ORDER FORM FOR INDIVIDUALS</p>
            </div>

            <div className="box2" onClick={(param) => Handlechange(2)}>
              <p>FREQUENLY ASKED QUESTIONS AND ANSWERS</p>
            </div>
          </div>
          <div className="right">
            <div className="box3" onClick={(param) => Handlechange(3)}>
              <p>ORDER FORM FOR DISTRIBUTION (ORGANISATIONS/ GURDWARAS)</p>
            </div>

            <div className="box4" onClick={(param) => Handlechange(4)}>
              <p>PR FORM FOR SIKH ACTIVISTS, CREATORS, AND SCHOLARS</p>
            </div>
          </div>

          {f1 && (
            <div className="form1">
              <div className="middle">
                <div className="middle2">
                  <p>Anhd</p>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdZu6gS-y5EGRruRbtbt8DglZLO5lzmnOmaeIE6GbwWfsMN8Q/viewform?embedded=true"
                    width="640"
                    height="2423"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="image"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          )}

          {f2 && (
            <div className="form2">
              <div className="middle">
                <div className="middle2">
                  <p>Anhd</p>
                  <div>hello mate</div>
                </div>
              </div>
            </div>
          )}

          {f3 && (
            <div className="form3">
              <div className="middle">
                <div className="middle2">
                  <p>Anhd</p>
                  <div>asdkjfkajsdb</div>
                </div>
              </div>
            </div>
          )}

          {f4 && (
            <div className="form4">
              <div className="middle">
                <div className="middle2">
                  <p>Anhd</p>
                  <div>helasdhfasjhdblo mate</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Preorder2;
