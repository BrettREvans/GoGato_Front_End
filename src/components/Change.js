import '../css/fonts.css';
import '../css/change.css';


function Change(){

    return (
        <>
            <button className="closeButton">X</button>
            <div className="blur"></div>

            <section className="changeScreen">
                <h1>Change Message</h1>

                <form action="/post" method ="put">

                    <input hidden id="id" name="id"></input>
                    <input hidden id="userid" name="userid"></input>
                    <input hidden id="parent_post" name="parent_post"></input>

                    <textarea required id="contents" name="contents" rows="5" cols="80" placeholder="revise text"></textarea>
                    <br></br><br></br>
                    <input type="submit" value="Save"></input>
                    
                </form>

            </section>
        </>
    );
}

export default Change;