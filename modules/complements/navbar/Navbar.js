import WindowSize from '../../../utils/WindowSize'

import MDesktop from './complements/MDesktop'
import MMobile from './complements/MMobile'

const Navbar = () => {
    const size = WindowSize();

    const width = size.width;

    function render() {
        if (width > 700){
            return(
                <>
                    <MDesktop />

                </>
            )
        } else {
            return(
                <>
                    <MMobile />
                </>
            )
        }
    }

    return render();
}

export default Navbar;