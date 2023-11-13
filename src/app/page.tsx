import Image from 'next/image'
import RegisterModal from './components/RegisterModal/RegisterModal'

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center px-10 py-7 bg-primary">
        <section>
          <h2 className="text-5xl font-light">
            ARENA<span className="uppercase font-bold">Bet</span>
          </h2>
        </section>
        <section className="flex p-4 items-start">
          <div className="mr-4">
            <input
              className="p-2 rounded-md"
              type="text"
              name="username"
              id="username"
              placeholder="Usuário"
            />
            <p className="pt-2 cursor-pointer">Criar conta</p>
          </div>
          <div className="mr-4">
            <input
              className="p-2 rounded-md "
              type="text"
              name="password"
              id="password"
              placeholder="Senha"
            />
            <p className="pt-2 cursor-pointer">Esqueci a senha</p>
          </div>
          <div>
            <button className="bg-secondary p-2 rounded-md font-bold">
              OK
            </button>
          </div>
        </section>
      </header>
    </>
  )
}
