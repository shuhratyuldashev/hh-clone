import { Card, CardContent } from "./ui/card";

const Header = () => {
  return (
    <header className="sticky top-0 right-0 left-0 z-10">
      <Card className="rounded-none">
        <CardContent className="bg-blue-500 p-0 flex">
            <div className="flex items-center gap-4 px-4 py-2">
              <span
                className="bg-none bg-white text-black font-semibold transition-colors duration-200 rounded-full px-3.5 py-3
                hover:bg-red-600 hover:text-white"
              >
                SH
              </span>
              <h2 className="font-semibold text-white text-md">SuperHunter <span className="font-normal">clone Head Hunter</span></h2>
            </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
