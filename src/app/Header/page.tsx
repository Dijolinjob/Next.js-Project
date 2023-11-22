import './Header.css'

export default function Header() {
    return(
        <nav className="navbar">
            <a href='./' className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-bold text-2xl tracking-tight">Learning Next.Js</span>
            </a>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="./ClientSideRendering" className="navbar-button text-lg">
                    Client Side Rendering
                </a>
                <a href="./StaticRendering" className="navbar-button text-lg ">
                    Static Server Side Rendering
                </a>
                <a href="./DynamicRendering" className="navbar-button text-lg ">
                    Dynamic Server Side Rendering
                </a>              
                <a href="./Form" className="navbar-button text-lg">
                    Form
                </a>
                </div>
            </div>
        </nav>
    );

}