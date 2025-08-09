import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

export default function ProjectPortfolio2() {
  return (
    <div className="bg-black h-screen w-screen">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />
    <div class="grid h-full w-full px-32 grid-flow-col grid-rows-3 gap-7">
      {/* Column 1 */}
      <div class="row-span-3 bg-white">
        01
      </div>
      {/* Column 2 */}
      <div class="row-span-3 bg-white">02</div>
      {/* Column 3 */}
      <div class="row-span-3 bg-white">03</div>
    </div>
    </div>
  );
}
