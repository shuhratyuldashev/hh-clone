import { Label } from '@radix-ui/react-label'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Form, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <Card className='w-[80%] lg:w-[30%] md:w-[45%]'>
      <CardContent className='flex flex-col items-center'>
        {/* <Form> */}
          <CardHeader>
            <CardTitle className='text-[20px]'>Вход</CardTitle>
          </CardHeader>
          <div className='w-full flex flex-col gap-1 mb-2'>
            <Label className='font-semibold'>Логин:</Label>
            <Input placeholder='Bob' className='w-full text-blue-500 dark:text-blue-700'/>
          </div>
          <div className='w-full flex flex-col gap-1 mb-10'>
            <Label className='font-semibold'>Пароль:</Label>
            <Input type="password" placeholder='bob228doe' className='w-full text-blue-500 dark:text-blue-700'/>
          </div>
          <Button size="lg" className='mt-2 w-full flex items-center gap-2 bg-blue-500 dark:bg-blue-700 text-white'>Войти <LogIn size={25}/></Button>
          <CardTitle className='mt-2 text-blue-500 dark:text-blue-700 font-normal text-[15px]'>Нету аккаунта? <Link className='font-medium hover:underline duration-200 dark:text-blue-700' to="/sign-up">Зарегистрируйтесь</Link></CardTitle>
        {/* </Form> */}
      </CardContent>
    </Card>
  )
}

export default SignIn;