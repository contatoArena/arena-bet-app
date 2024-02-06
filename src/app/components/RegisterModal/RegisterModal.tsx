import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Container,
  Typography,
  Paper,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import EmailIcon from '@mui/icons-material/Email'
import Image from 'next/image'
import { z } from 'zod'

// Defina o esquema de validação usando Zod
const RegistrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
  address: z.string(),
  birthdate: z.string(),
  cpf: z.string(),
  gender: z.string().optional(),
})

// Tipo dos dados do formulário
type RegistrationFormData = z.infer<typeof RegistrationSchema>

const RegistrationForm = ({
  isOpen,
  onClose,
  firstRegister,
  setFirstRegister,
}: any) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    birthdate: '',
    cpf: '',
    gender: '', // Pode ser opcional
  })

  useEffect(() => {
    console.log('remontou o componente')
  }, [firstRegister])

  const openRegisterModal = (e: any) => {
    setFirstRegister(true)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // Valida os dados do formulário usando o esquema de validação do Zod
      RegistrationSchema.parse(formData)
      console.log('Formulário válido:', formData)
      // Aqui você pode enviar os dados do formulário para onde quiser, como um servidor API
    } catch (error) {
      console.error('Erro de validação:', error)
      // Aqui você pode lidar com erros de validação, como exibir mensagens de erro para o usuário
    }
  }

  const registerFunction = (e: any) => {
    onClose()
    setTimeout(() => {
      setFirstRegister(false)
    }, 3000)
    toast.success('Registrado com sucesso!', {
      position: 'top-center',
    })
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <Container>
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Fundo preto transparente */}
          <div
            className={`fixed inset-0 bg-black opacity-50 ${
              isOpen ? 'block' : 'hidden'
            }`}
          ></div>

          <Paper elevation={3} className="p-5 w-96 relative">
            <Button className="self-end" onClick={onClose}>
              X
            </Button>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <div className="flex justify-center">
                  <Image
                    src="https://cdn.discordapp.com/attachments/823921390171717694/1185697018656587816/LOGOMARCA_HORIZONTAL_FUNDO_TRANSPARENTE.png?ex=65908d66&is=657e1866&hm=da27211a510b2a01bf04daf43f778a8422591f80e680828b80e13fe6580665b0&"
                    alt="logo_arenasportsbet"
                    width={200}
                    height={300}
                  />
                </div>
              </Grid>
            </Grid>
            {!firstRegister ? (
              <div>
                <p className="font-bold p-10 text-xs">
                  BEM-VINDO À ARENABET! Cadastre-se utilizando uma das contas
                  abaixo e desfrute da melhor experiência de apostas com a
                  ARENABET.
                </p>
                {/* Integração do MUI */}
                <div className="flex flex-col justify-center gap-2">
                  <button
                    onClick={openRegisterModal}
                    className="flex justify-center gap-2 border-1 border-black rounded-lg p-3 bg-red-200 border-opacity-50"
                  >
                    <GoogleIcon />
                    <p className="font-bold">Cadastre-se com Google</p>
                  </button>
                  <button
                    onClick={openRegisterModal}
                    className="flex justify-center gap-2 border-1 border-black rounded-lg p-3 bg-green-200 border-opacity-50"
                  >
                    <FacebookIcon />
                    <p className="font-bold">Cadastre-se com Facebook</p>
                  </button>
                  <p className="flex flex-col justify-center w-full font-extrabold text-center p-4 ">
                    OU
                  </p>
                  <button
                    onClick={openRegisterModal}
                    className="flex justify-center gap-2 border-1 border-black rounded-lg p-3 bg-blue-200 border-opacity-50"
                  >
                    <EmailIcon />
                    <p className="font-bold">Cadastre-se com Email</p>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <Grid item xs={12}>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      margin="normal"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      label="Senha"
                      variant="outlined"
                      margin="normal"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      label="Confirmação de Senha"
                      variant="outlined"
                      margin="normal"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      label="Endereço"
                      variant="outlined"
                      margin="normal"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      label="Data de Nascimento"
                      variant="outlined"
                      margin="normal"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                        style: { marginTop: '8px' },
                      }}
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      label="CPF"
                      variant="outlined"
                      margin="normal"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                    />
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Genero</InputLabel>
                      <Select
                        label="Genero"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <MenuItem value="masculino">Masculino</MenuItem>
                        <MenuItem value="feminino">Feminino</MenuItem>
                        <MenuItem value="outro">Outro</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      variant="contained"
                      className="bg-primary"
                      fullWidth
                      type="submit"
                      onClick={registerFunction}
                    >
                      Registrar
                    </Button>
                  </form>
                </Grid>
              </div>
            )}
          </Paper>
        </div>
      </Container>
    </>
  )
}

export default RegistrationForm
