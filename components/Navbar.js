

const Navbar = () => {
  return (
    <nav className="flex bg-gray-800 fixed w-full text-gray-300 text-2xl h-[80px] justify-between">
      <h1 className="flex justify-start items-center h-[80px] pl-8">Lol-Riven</h1>
      <div className='h-[80px] flex justify-end justify-items-end items-center px-4 '>
        <ul className='flex'>
          <li className="px-8">
            Home
          </li>
          <li className="px-8">
            Streams
          </li>
          <li className="px-8">
            Guides
          </li>
          <li className="px-8">
            Fundamentals
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;