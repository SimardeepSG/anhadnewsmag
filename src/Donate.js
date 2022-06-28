import "./styles/donate.css";

const Donate = () => {
  return (
    <div className="donateContainer">
{/* ---------------------------------------- */}

<div className="donateTitle">DONATE</div>

{/* ---------------------------------------- */}

<div id="line"className="hr1"><hr1 /></div>

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

<div id="line"><hr2 /></div>

{/* ---------------------------------------- */}

<div className="donateHeader2">Your Donation will provide...</div>

{/* -------------------------------------------------------------------------------- */}

<div className="button">
<a href="https://react.school" target="_blank" rel="noreferrer">
  <button> $5 <br /> ONE PRINTED MAGAZINE </button>
  <button> $5 <br /> ONE PRINTED MAGAZINE + DOMESTIC SHIPPING </button>
  <button> $10 <br /> ONE PRINTED MAGAZINE + INTERNATIONAL SHIPPING <br />
          [PRICE DEPENDS ON COUNTRY SELECTION] </button>
  <button> $20 <br /> PACKAGING COSTS PER INDIVIDUAL </button>
</a>
</div>


    </div>
  );
};

export default Donate;
