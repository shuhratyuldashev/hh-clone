import { Filter, Heart, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import FilterBar from "./Vacancies/FilterBar";

const Header = ({ isAuth }: { isAuth: boolean }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 right-0 left-0 z-10">
      <Card className="rounded-none">
        <CardContent className="bg-blue-500 p-0 flex dark:bg-blue-700">
            <div className="flex items-center justify-between px-4 py-2 w-full">
              <div className="flex items-center gap-4">
                <span
                  className="bg-none bg-white dark:bg-black dark:text-white text-black font-semibold transition-colors duration-200 rounded-full px-3.5 py-3
                  hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white"
                >
                  SH
                </span>
              <h2 className="hidden font-semibold text-white text-md md:block">SuperHunter <span className="font-normal">clone HeadHunter</span></h2>
              </div>
              <div className="flex gap-2">
                {isAuth ? (
                <Link to="favorites">
                  <Button className="rounded-lg text-white" variant="link">Избранные</Button>
                </Link>
                ): (
                <div className="flex gap-1">
                  <Link to="/sign-up">
                    <Button className="rounded-lg text-white text-[14px]" variant="link">Зарегистрироваться</Button>
                  </Link>
                  <Link to="/sign-in">
                    <Button className="rounded-lg text-white text-[14px]" variant="link">Войти</Button>
                  </Link>
                </div>
                )}
                <Button size="icon" className="rounded-full" variant="secondary" onClick={toggleTheme}>{theme == "light" ? <Sun /> : <Moon />}</Button> 
                <div className="lg:hidden">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button size="icon" className="rounded-full" variant="secondary"><Filter /></Button> 
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <FilterBar />
                      <AlertDialogCancel className="p-0">
                        <Button className="w-full text-white bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 bg-blue-500">Закрыть</Button>
                      </AlertDialogCancel>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
