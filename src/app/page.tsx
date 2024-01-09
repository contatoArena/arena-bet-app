'use client'
import React, { useState } from 'react'
import RegisterModal from './components/RegisterModal/RegisterModal'
import Image from 'next/image'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    console.log('abriu')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // Lógica adicional para alternar o modo escuro
  }

  return (
    <>
      <header
        className={`flex justify-between items-center px-10 py-7 ${
          darkMode ? 'bg-gray-800' : 'bg-primary'
        }`}
      >
        <section>
          <h2
            className={`text-5xl font-light ${
              darkMode ? 'text-white' : 'text-white'
            }`}
          >
            ARENA<span className="uppercase font-bold">Bet</span>
          </h2>
        </section>
        <section className="flex p-4 items-start relative">
          <div className="mr-4">
            <input
              className="p-2 rounded-md"
              type="text"
              name="username"
              id="username"
              placeholder="Usuário"
            />
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
          {/* Botão de Modo Escuro */}
        </section>
      </header>
      {/* Componente do Modal de Registro */}
      <RegisterModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <button
        className={`absolute bottom-4 left-4 bg-primary text-white p-2 rounded-md font-bold ${
          darkMode ? 'bg-secondary text-white' : ''
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </>
  )
}

export default Home
