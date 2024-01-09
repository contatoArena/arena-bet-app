import React from 'react'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Container,
  Paper,
} from '@mui/material'
import Image from 'next/image'

const RegistrationForm = ({ isOpen, onClose }: any) => {
  return (
    <Container>
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-150 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <Paper elevation={3} className="p-5 w-96">
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
            <Grid item xs={12}>
              <form>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Senha"
                  variant="outlined"
                  margin="normal"
                  type="password"
                />
                <TextField
                  fullWidth
                  label="Confirmação de Senha"
                  variant="outlined"
                  margin="normal"
                  type="password"
                />
                <TextField
                  fullWidth
                  label="Endereço"
                  variant="outlined"
                  margin="normal"
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
                />
                <TextField
                  fullWidth
                  label="CPF"
                  variant="outlined"
                  margin="normal"
                />
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel>Genero</InputLabel>
                  <Select label="Genero">
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
                >
                  Registrar
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  )
}

export default RegistrationForm
