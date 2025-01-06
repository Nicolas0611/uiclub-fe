import Image from "next/image";
const Navbar = () => {
  return (
    <header className="h-20 justify-between items-center flex  px-20 ">
      <Image src="/logo.svg" alt="logo" width={130} height={130} />
      <ul className="flex gap-5">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Sobre nosotros</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
