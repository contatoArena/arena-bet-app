'use client'
import React, { useState } from 'react'
import RegisterModal from './components/RegisterModal/RegisterModal'
import Image from 'next/image'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    console.log('abriu')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <header className="flex justify-between items-center px-10 py-7 bg-primary">
        <section>
          <h2 className="text-5xl font-light">
            ARENA<span className="uppercase font-bold">Bet</span>
          </h2>
          {/* <Image
            src="https://cdn.discordapp.com/attachments/823921390171717694/1185697018656587816/LOGOMARCA_HORIZONTAL_FUNDO_TRANSPARENTE.png?ex=65908d66&is=657e1866&hm=da27211a510b2a01bf04daf43f778a8422591f80e680828b80e13fe6580665b0&"
            alt="logo_arenasportsbet"
            width={200}
            height={300}
          /> */}
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
            {/* Abrir o modal ao clicar no texto */}
            <p className="pt-2 cursor-pointer" onClick={handleOpenModal}>
              Criar conta
            </p>
          </div>
          <div className="mr-4">
            <input
              className="p-2 rounded-md"
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
      {/* Componente do Modal de Registro */}
      <RegisterModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default Home
