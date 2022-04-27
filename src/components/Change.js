import '../css/fonts.css';
import '../css/change.css';


function Change(){

    return (
        <>
            <button type='submit' className="closeButton">X</button>
            <div className="blur"></div>

            <section className="changeScreen">
                <h1>Change Post</h1>

                <form action="/edit">
                    <textarea id="contents" name="contents" rows="5" cols="80">revise text</textarea>
                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                </form>

            </section>
        </>
    );
}

export default Change;