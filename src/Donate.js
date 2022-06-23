import "./styles/donate.css";

<<<<<<< HEAD
const Donate = () => {
  return (
    <div className="donateContainer">
      <a href="https://react.school" >
        <button> Link Button </button>
=======
function sayHello() {
  alert("You clicked me!");
}

const Donate = () => {
  return (
    <div className="donateContainer">
      <a href="https://react.school" target="_blank" rel="noopener noreferrer">
        <button onClick={sayHello}> Link Button </button>
>>>>>>> e98942ea4e6b61ce280e023300516014507b95fb
      </a>
      {/* ---------------------------------------- */}

      <div className="donateTitle">DONATE</div>
      <div className="donateHeader">Your Donation will provide...</div>
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
      {/* -------------------------------------------------------------------------------- */}
      <div className="donateBottomTable">
        {/* ---------------------------------------- */}
        <div className="donateCostMenu">
          <div className="donateItemTitle">
            {/* Anhad Magazine <br></br>Costs Menu */}
          </div>
          <div className="donateItemChart">
            <div className="donateItemItem">
              {/* <div>ITEM</div> */}
              {/* <p>01. ONE PRINTED MAGAZINE </p>
              <p>02. ONE PRINTED MAGAZINE + DOMESTIC SHIPPING </p>
              <p>
                03. ONE PRINTED MAGAZINE + INTERNATIONAL SHIPPING <br></br>
                [PRICE DEPENDS ON COUNTRY SELECTION]
              </p>
              <p>04. PACKAGING COSTS PER INDIVIDUAL </p> */}
            </div>

            <div className="donateItemCost">
              {/* <div>COST OF PRODUCTION </div> */}
              {/* <p>$5.00</p>
              <p>$8.00 +</p>
              <p>$20.00 +</p>
              <p>$5.00</p> */}
            </div>
          </div>
        </div>
        {/* ---------------------------------------- */}
        <div className="donateColumn2">
          {/* { <div className="venmo">VENMO US! @anhadmagazine</div>} */}
          {/* ---------------------------------------- */}
          {/* { <div className="dasvandh">Donate via Dasvandh Network! </div>} */}
          {/* ---------------------------------------- */}
          {/* {<div className="policy">Donor Policy and FAQs</div> } */}
        </div>
        {/* ---------------------------------------- */}
      </div>
      {/* -------------------------------------------------------------------------------- */}
      <a
        href="https://docs.google.com/forms/u/0/"
        target="_blank"
        rel="noreferrer"
      >
        <button> SUBMIT A REVIEW </button>
      </a>
    </div>
  );
};

export default Donate;
