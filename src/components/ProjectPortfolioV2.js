import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

export default function ProjectPortfolio2() {
  return (
    <div className="bg-black min-h-screen w-screen flex flex-col">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />
    <div class=" flex-1 min-h-0 px-4 sm:px-8 lg:px-32 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 h-full">
      
      {/* Column 1 */}
          <div className="bg-white flex flex-col min-h-0">
        {/* scrollable content */}
            <div className="p-4 overflow-y-auto min-h-0">
            <div className="text-xl"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div>
        </div>
      </div>
      {/* Column 2 */}
      <div class="row-span-3 bg-white">
        02
      </div>
      {/* Column 3 */}
      <div class="row-span-3 bg-white">
        03  
      </div>
    </div>
    </div>
    </div>
  );
}
