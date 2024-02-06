import React, { useState } from 'react'
import { Button, Grid, Container, Paper } from '@mui/material'
import Image from 'next/image'

const Modal = ({ isOpen, onClose }: any) => {
  const [firstRegister, setFirstRegister] = useState('')

  return (
    <Container>
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
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
        </Paper>
      </div>
    </Container>
  )
}

export default Modal
