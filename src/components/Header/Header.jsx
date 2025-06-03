import HeroSection from "./elements/HeroSection";

function Header() {
  
  return (
    <div className={`relative overflow-hidden p-2 xl:px-4 w-full` }>
      <HeroSection/>
    </div>
  );
}

export default Header;

