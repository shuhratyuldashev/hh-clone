import { Card, CardContent, CardHeader } from "./ui/card";

const Header = () => {
  return (
    <header className="sticky top-0 right-0 left-0 z-10">
      <Card className="rounded-none">
        <CardContent className="bg-blue-500 p-0 flex">
          <CardHeader className="p-4">
            <h2
              className="bg-none bg-white text-black font-semibold transition-colors duration-200 rounded-full px-3.5 py-3
              hover:bg-red-600 hover:text-white"
            >
              SH
            </h2>
          </CardHeader>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
