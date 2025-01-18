import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import VacancyNotFound from "./VacancyNotFound"

const VacancyFullInfo = ({ vacancy }: { vacancy: any }) => {
  if (!vacancy) {
    return <VacancyNotFound />; 
  }

  const { name, salary, employer, employment, description, experience, area, address, premium, alternate_url, key_skills } = vacancy;
  const mapAddress = address ? [address.lat, address.lng] : null;

  return (
    <Card>
      <CardContent>
        <CardTitle className="mt-5 text-2xl">{name}</CardTitle>
        <div className="flex items-center my-2 gap-4">
          {salary ? (
            <h2 className="font-semibold text-xl text-green-500">
              {salary.from && `от ${salary.from}` || ''} {salary.to && `до ${salary.to}` || ''} {salary.currency}
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
        <div className="mt-4">
          <h4 className="font-semibold">Описание вакансии:</h4>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        {address ? (
          <div>
            <h4 className="font-semibold mt-5">
              Где предстоит работать: 
            </h4>
            <span className="font-normal">{address?.city || ""}, {address?.street || ""}, {address?.building || ""}</span>
            <div className="w-full h-[400px] mt-4">
              <MapContainer 
                center={mapAddress} 
                zoom={15} 
                scrollWheelZoom={false} 
                style={{ width: "100%", height: "400px", borderRadius: "16px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapAddress && (
                  <Marker position={mapAddress}>
                    <Popup>
                      {address.city || ""} {address.street || ""} {address.building || ""}
                    </Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">Адрес не указан.</p>
        )}
        <Link to={alternate_url}>
          <Button className="bg-blue-500 hover:bg-blue-700 mt-5">
            Откликнуться в hh 
          </Button>
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <h2 className="font-semibold">Ключевые навыки:</h2>
        <div className="mr-5 flex gap-2 flex-wrap items-start justify-start">
          {key_skills && key_skills.map((skill: any) => (
            <Badge variant="secondary" key={skill.name}>{skill.name}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default VacancyFullInfo
