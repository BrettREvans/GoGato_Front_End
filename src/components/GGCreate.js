import '../css/fonts.css';
import '../css/change.css';


const GGCreate = () => {

    return (
        <>
            <section className="">
                <h1>Create Message</h1>

                <form action="/post" method ="post">

                    

                    <input hidden id="likes" name="likes" value = "1"></input>
                    <input hidden id="parentid" name="parentid" value ="0"></input>

                    <textarea required id="contents" name="contents" rows="5" cols="80" placeholder="revise text"></textarea>
                    <br></br><br></br>
                    <input type="submit" value="Post"></input>
                    
                </form>

            </section>
        </>
    );
}

export default GGCreate;

// <input hidden id="userid" name="userid" value = {window.user.userid}></input> //places this on line 14 when window user object is created.