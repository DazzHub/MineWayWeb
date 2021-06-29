import Home from "../complements/home/Home";
import Us from '../complements/sections/us/Us'
import Modes from "../complements/sections/modes/Modes";
import Vote from "../complements/sections/vote/Vote";
import Staff from "../complements/sections/staff/Staff";

const Layout = ({data}) => {

    if(data === undefined || data === "error"){
       data = {"players": { "online":0, "max": 0}}        
    }

    return (
        <>
           <Home data={data}/> 
           <Us/>
           <Modes/>
           <Vote/>
           <Staff/>
        </>
    )
}

export default Layout;