

function Header() {

    return (
      <header className="header from-lg:fixed from-lg:right-30 from-lg:bottom-0 from-lg:z-30 from-lg:flex from-lg:items-center from-lg:h-[calc(100vh-200px)] from-lg:top-100 from-lg:opacity-100 from-lg:transition from-lg:duration-300 from-lg:[&amp;.hide-header]:z-0 from-lg:[&amp;.hide-header]:opacity-0" id="navbar-collapse-toggle">
         {/* <!-- Fixed Desktop Navigation Starts --> */}
         <ul id="desktop-nav" className="icon-menu down-lg:hidden from-md:block uppercase">
            <li className="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2 active">
               <i className="fa fa-home absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"></i>
               <div className="group block p-0 w-50 h-50">
                  <h2 className="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">Home</h2>
               </div>
            </li>
            <li className="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2">
               <i className="fa fa-user absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"></i>
               <div className="group block p-0 w-50 h-50">
                  <h2 className="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">About</h2>
               </div>
            </li>
            <li className="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2">
               <i className="fa fa-briefcase absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"></i>
               <div className="group block p-0 w-50 h-50">
                  <h2 className="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">Portfolio</h2>
               </div>
            </li>
            <li className="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2">
               <i className="fa fa-envelope-open absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"></i>
               <div className="group block p-0 w-50 h-50">
                  <h2 className="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">Contact</h2>
               </div>
            </li>
            <li className="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2">
               <i className="fa fa-comments absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"></i>
               <div className="group block p-0 w-50 h-50">
                  <h2 className="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">Blog</h2>
               </div>
            </li>
         </ul>
         {/* <!-- Fixed Desktop Navigation Ends --> */}
         {/* <!-- Mobile Menu Starts --> */}
         <nav className="hidden down-md:block relative">
            <div id="menuToggle" className="fixed top-30 right-30 z-50 select-none pt-19 pl-16 w-54 h-54 rounded-5 bg-black-3 xs:right-15 xs:top-4 xs:pb-13 xs:w-49 xs:h-49">
               <input id="inputmobile" className="h-54 w-54 absolute top-0 left-0 opacity-0 z-20 cursor-pointer peer" type="checkbox"/>
               <span className="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0 custom-transition peer-checked:rotate-45 peer-checked:translate-x-1 peer-checked:translate-y-0"></span>
               <span className="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0-100 custom-transition peer-checked:opacity-0 peer-checked:scale-0-2"></span>
               <span className="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0-100 custom-transition peer-checked:-rotate-45 peer-checked:translate-x-2 peer-checked:translate-y-2"></span>
               <ul className="fixed m-0 left-0 top-0 w-full h-full pt-60 bg-black-3 -translate-x-full ease-menu-mobile duration-500 peer-checked:transform-none [&amp;>li]:cursor-pointer [&amp;>li]:after:absolute [&amp;>li]:after:h-px [&amp;>li]:after:w-[calc(100%-60px)] [&amp;>li]:after:bg-black-4 [&amp;>li]:after:left-30 [&amp;>li:last-child]:after:hidden" id="mobile-nav">
                  <li className="mobile-nav-element relative pl-30 home-link active">
                     <div className="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                        <i className="fa fa-home"></i>
                        <span className="absolute left-50 xs:left-35 font-normal">Home</span>
                     </div>
                  </li>
                  <li className="mobile-nav-element relative pl-30">
                     <div className="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                        <i className="fa fa-user"></i>
                        <span className="absolute left-50 xs:left-35 font-normal">About</span>
                     </div>
                  </li>
                  <li className="mobile-nav-element relative pl-30">
                     <div className="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                        <i className="fa fa-folder-open"></i>
                        <span className="absolute left-50 xs:left-35 font-normal">Portfolio</span>
                     </div>
                  </li>
                  <li className="mobile-nav-element relative pl-30">
                     <div className="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                        <i className="fa fa-envelope-open"></i>
                        <span className="absolute left-50 xs:left-35 font-normal">Contact</span>
                     </div>
                  </li>
                  <li className="mobile-nav-element relative pl-30">
                     <div className="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                        <i className="fa fa-comments"></i>
                        <span className="absolute left-50 xs:left-35 font-normal">Blog</span>
                     </div>
                  </li>
               </ul>
            </div>
         </nav>
         {/* <!-- Mobile Menu Ends --> */}
      </header>
    )
}

export default Header;
