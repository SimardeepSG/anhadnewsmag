const  Home = () => {


    const handleClick = (e) => {
        console.log('sdafasdfasdf', e)
    }
    const handleClickAgain = (name) => {
        console.log(name)
    }

    return ( 
        <div className="home">
            <h2>
                Homepage
            </h2>
            <button class="b-homepage" onClick={handleClick}> CLick me </button>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <button class="b-homepage" onClick= {() => {
                handleClickAgain ('mario')
            }}> CLick me </button>


<ul>
  <li><span>home</span></li>
  <li><span>products</span></li>
  <li><span>services</span></li>
  <li><span>contact</span></li>
</ul>



        </div>
     );
}

 
export default Home;