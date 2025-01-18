import { Card, CardContent } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Form, FormField, FormLabel } from "../ui/form"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const filters = [
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

const FilterBar = () => {
  return (
    <div className="mr-5 w-[45%]">
      <Card className="w-full">
      <CardContent>
        {/* <Form> */}
          <form className="my-4" onSubmit={() => {}}>
            <h2>Фильтр</h2>
            <div className="mt-4 flex flex-col gap-2">
              {filters.map((f: any) => (
                <div className="flex items-center gap-2" key={f.label}>
                  <Checkbox />
                  <Label>{f.label}</Label>
                </div>
              ))}
            </div>
            <RadioGroup>
              <RadioGroupItem value="v1" id="r1"/>
              <RadioGroupItem value="v3" id="r2"/>
              <RadioGroupItem value="v2" id="r3"/>

            </RadioGroup>
          </form>
        {/* </Form> */}
      </CardContent>
    </Card>
    </div>
  )
}

export default FilterBar