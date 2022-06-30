import "./styles/donate.css";

const Donate = () => {
  return (
    <div className="donateContainer">
{/* ---------------------------------------- */}

<div className="donateTitle">DONATE</div>

{/* ---------------------------------------- */}

<div className="hr1">__________________________________________</div>

{/* ---------------------------------------- */}

<div className="donateHeader1">Supporting ANHAD</div>
<div className="donateDescription">
  Anhad Magazine appreciates your support in any way possible. For us to
  succeed in expanding our work and ensuring it is long-lasting, we need
  your support. Your donation to Anhad will ensure Sikh literacy for ages
  with guaranteed permanence and accessibility to the Sikh diaspora
  through language and ownership of the magazine. All donations go
  strictly toward: (1) promotion of the magazine, (2) printing the
  magazine, (3) packaging the magazine. Donations are not used toward any
  form of compensation or unnecessary costs outside of the program budget.
  We hope you consider giving.
</div>

{/* ---------------------------------------- */}

<div className="hr2">____________________________________________________________________</div>

{/* ---------------------------------------- */}

<div className="donateHeader2">Your Donation will provide...</div>

{/* ---------------------------------------- */}

<div className="Box1">$5 <br/>One Printed Magazine</div>
<div className="Box2">$5 <br/>One Printed Magazine</div>
<div className="Box3">$10 <br/>One Printed Magazine</div>
<div className="Box4">$20 <br/>One Printed Magazine</div>

{/* ---------------------------------------- */}

<a href="https://react.school" target="_blank" rel="noreferrer">
  <button className="button"> $10  </button>
  <button className="button"> $15 </button>
  <button className="button"> $20  </button>
  <button className="button"> $25  </button>
  <button className="button"> Other  </button>
</a>

<div className="Box1">$5 <br/>One Printed Magazine</div>
<div className="Box2">$5 <br/>One Printed Magazine</div>
<div className="Box3">$10 <br/>One Printed Magazine</div>
<div className="Box4">$20 <br/>One Printed Magazine</div>

    </div>
  );
};

export default Donate;
