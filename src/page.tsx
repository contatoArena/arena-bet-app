import { useForm, Controller } from 'react-hook-form'

interface FormData {
  username: string
  password: string
}

export default function Home() {
  const { control, handleSubmit, errors }: any = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h3>Login</h3>
        <p>Faça login na sua conta</p>
      </div>
    </main>
  )
}
