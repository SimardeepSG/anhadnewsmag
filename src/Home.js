const  Home = () => {

//     // these buttons are not needed
// /*
//     const handleClick = (e) => {
//         console.log('sdafasdfasdf', e)
//     }
//     const handleClickAgain = (name) => {
//         console.log(name)
//     }

// */

    return ( 
        <div className="home">

            <div className="home-page-div">
          <h1>ANHAD</h1>
          <p>a student-run sikh sprint & multimedia magazine</p>
          <p>inspiring a new wave of sikh literacy</p>
           <p>and connectedness to our guru</p>
           
        </div>


            {/* <h2>
                Homepage
            </h2>
            <button class="b-homepage" onClick={handleClick}> CLick me </button>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <button class="b-homepage" onClick= {() => {
                handleClickAgain ('mario')
            }}> CLick me </button> */}


        </div>
     );
}

 
export default Home;