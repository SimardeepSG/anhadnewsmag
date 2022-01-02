import "./styles/donate.css";

const Donate = () => {
  return (
    <div className="donateContainer">
      {/* ---------------------------------------- */}
      <div className="donateTitle">DONATE</div>
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
            Anhad Magazine <br></br>Costs Menu
          </div>
          <div className="donateItemChart">
            <div className="donateItemItem">
              <div>ITEM</div>
              <p>01. ONE PRINTED MAGAZINE </p>
              <p>02. ONE PRINTED MAGAZINE + DOMESTIC SHIPPING </p>
              <p>
                03. ONE PRINTED MAGAZINE + INTERNATIONAL SHIPPING <br></br>
                [PRICE DEPENDS ON COUNTRY SELECTION]
              </p>
              <p>04. PACKAGING COSTS PER INDIVIDUAL </p>
            </div>

            <div className="donateItemCost">
              <div>COST OF PRODUCTION </div>
              <p>$5.00</p>
              <p>$8.00 +</p>
              <p>$20.00 +</p>
              <p>$5.00</p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------- */}
        <div className="donateColumn2">
          <div className="venmo">VENMO US! @anhadmagazine</div>
          {/* ---------------------------------------- */}
          <div className="dasvandh">Donate via Dasvandh Network! </div>
          {/* ---------------------------------------- */}
          <div className="policy">Donor Policy and FAQs</div>
        </div>
        {/* ---------------------------------------- */}
      </div>
      {/* -------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Donate;
