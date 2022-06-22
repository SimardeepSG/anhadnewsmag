import "./styles/preorder.css";
import Varrow from "./Varrow";

const Preorder = () => {
  return (
    <div className="preorderbody">
      <h1> PRE-ORDER THE TIME EDITION</h1>
      <br />

      <div className="faq">
        <div className="text">
          <div>
            {" "}
            Frequently Asked Questions:
            <br />
            <br />
            <b>Do I have to pay to receive a copy of Anhad?</b>
            <br />
            <br />
            No! As part of Anhad’s mission to make the magazine accessible, we
            are providing the magazine for free. We do humbly ask everyone who
            is buying a copy to donate as printing and packaging each copy costs
            $11 and international packages cost upward of $30 each. However, we
            do prioritize shipping for those packages earlier for individuals
            who have donated.
            <br />
            <br />
            <b>What if I want to order multiple copies? </b>
            <br />
            <br />
            If you are an individual ordering multiple copies for your
            family/relatives and friends, the form will guide your on specifics.
            <br />
            <br />
            <b>How long does the magazine take to arrive? </b>
            <br />
            <br />
            The magazine can take anywhere from a few days to a full month. We
            do provide a tracking number but given that the post office is
            backed up in the United States and we are a team compiling packages
            together, we ask for patience! If there are any concerns, please
            email anhadnewsmagazine@gmail.com. I am ordering the magazine for
            distribution as an organization/gurdwara. What do I do? Please fill
            out the organization/distribution form. All instructions and details
            are provided in the form. We highly recommend
            organizations/gurdwaras interested in ordering Anhad copies to
            consider donations for the printing costs of their order.
            <br />
            <br />
            <b> How can I donate to Anhad? </b>
            <br />
            <br />
            Check out the Donate tab on our website on the top right. BTW, we do
            have a venmo!
          </div>
        </div>
      </div>

      {/* To add links to these boxes */}
      <div className="pboxes">
        <div className="pbox1">
          <p>PRE-ORDER FORM FOR INDIVIDUALS</p>
        </div>

        <div className="pbox2">
          <p>PRE-ORDER FORM FOR DISTRIBUTION (ORGANISATIONS/GURDWARAS)</p>
        </div>

        <div className="pbox3">
          <p>PRE-ORDER FORM FOR SIKH ACTIVISTS, CREATORS AND SCHOLARS</p>
        </div>
      </div>
      <div className="Arrow">
        <Varrow
          newpage="/Preorder2"
          textdiv="Click to Access All Forms"
        ></Varrow>
      </div>
    </div>
  );
};

export default Preorder;
