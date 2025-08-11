import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

export default function ProjectPortfolio2() {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden flex flex-col">
      {/* Top bar(s) */}
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />

      {/* Grid fills remaining viewport; adjust 64px if NavBar has fixed height */}
      <div className="flex-1 min-h-0 ">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full gap-6 px-36">
          
          {/* Column 1 */}
          <div className="bg-white flex flex-col min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4">
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.
                This concept reimagines an architectural product website with a minimalistic, editorial-inspired design. It combines clean typography, high-end visuals, and smooth user flows to highlight the craftsmanship behind acoustic panels and sustainable architecture solutions.

              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white flex flex-col min-h-0">
            <div className="p-4 border-b font-semibold">02</div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4">
                {/* lots of content here */}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white flex flex-col min-h-0">
            <div className="p-4 border-b font-semibold">03</div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4">
                {/* lots of content here */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

