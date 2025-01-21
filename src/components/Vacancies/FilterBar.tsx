import { Card, CardContent } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Form, FormField, FormLabel } from "../ui/form"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const filters = [
  {
    label: "Фильтр",
    list: [
      { 
        label: "Подработка"
      },
      {
        label: "Не полный день"
      },
      {
        label: "от 4 часов в день"
      },
      {
        label: "По вечерам"
      },
      {
        label: "Разовое задание"
      },
      {
        label: "По выходным"
      }
    ]
  },{
    label: "Регион",
    list: [
      {
        label: "Узбекистан"
      },{
        label: "Россия"
      },{
        label: "Казахстан"
      }
    ]
  },{
    label: "Опыт работы",
    list: [
      {
        label: "Не имеет значения"
      },{
        label: "Нет опыта"
      },{
        label: "от 1 года до 3 лет"
      },{
        label: "от 3 года до 6 лет"
      },{
        label: "более 6 лет"
      }
    ]
  }
]

const FilterBar = () => {
  return (
    <div>
      <CardContent>
        {/* <Form> */}
          <form className="my-4" onSubmit={() => {}}>
            <div className="mt-4 flex flex-col gap-2">
              {filters.map((f: any) => (
                <div className="flex-col gap-2" key={f.label}>
                  <h2>{f.label}</h2>
                  {f.list.map((i: any) => (
                      <div key={i.label} className="w-full flex gap-2 mt-1">
                        <Checkbox />
                        <Label>{i.label}</Label>
                      </div>
                    ))}
                </div>
              ))}
            </div>
    
          </form>
        {/* </Form> */}
      </CardContent>
    </div>
  )
}

export default FilterBar