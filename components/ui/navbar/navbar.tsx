import Logo from "./_components/logo";

const Navbar = () => {
    return ( <div
        className="
        flex
        items-center
        justify-between
        pr-10
        lg:px-20
        sticky
        top-0
        z-50
        bg-white
        h-24
        ">
        <div className="px-4">
            <div className="w-40">
                <Logo/>
            </div>
        </div>
    </div> );
}
 
export default Navbar;