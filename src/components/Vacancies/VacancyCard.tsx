import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";

const VacancyCard = ({ vacancy }: { vacancy: any }) => {
  const { id, name, salary, employer, employment, experience, area, premium, alternate_url } = vacancy;

  return (
    <Card>
      <CardContent>
        <CardTitle className="mt-5 text-2xl">{name}</CardTitle>
        <div className="flex items-center my-2 gap-4">
          {salary ? (
            <h2 className="font-semibold text-xl text-green-500">
              {salary.from  && `от ${salary.from}`|| ''} {salary.to  && `до ${salary.to}`|| ''} {salary.currency}
              </h2>
          ) : (
            <h2 className="font-semibold text-xl">Зарплата не указана</h2>
          )}
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary">{employment?.name || "Не указано"}</Badge>
            <Badge variant="secondary">{experience?.name || "Не указано"}</Badge>
            {premium && <Badge variant="destructive">Премиум вакансия</Badge>}
          </div>
        </div>
        <h4 className="font-semibold">
          Компания: <span className="font-normal">{employer?.name || "Не указано"}</span>
        </h4>
        <h4 className="font-semibold">
          Локация: <span className="font-normal">{area?.name || "Не указано"}</span>
        </h4>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={alternate_url}>
          <Button className="bg-blue-500 hover:bg-blue-700">
            Откликнуться в hh 
          </Button>
        </Link>
        <Link to={`/${id}`}>
          <Button className="hover:bg-blue-50" variant="secondary">
            Посмотреть
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default VacancyCard;
