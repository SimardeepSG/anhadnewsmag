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
            <button onClick={handleClick}> CLick me </button>
            <button onClick= {() => {
                handleClickAgain ('mario')
            }}> CLick me </button>
        </div>
     );
}
 
export default Home;