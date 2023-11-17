import { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    Checkbox,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Stack,
    Modal,
    Box,
    Paper,
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

export default function Formulario() {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        genero: '',
        estudios: '',
        password: '',
        usuario: '',
        contrasena: '',
    })


    const [modalOpen, setModalOpen] = useState(false)


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        handleClearForm()
    }

    const handleClearForm = () => {
        setFormData({
            nombre: "",
            apellido: "",
            edad: "",
            genero: "",
            estudios: "",
            password: "",
            usuario: "",
            contrasena: ""
        });
    };


    const listaEstudios = [
        {
            value: 'Primaria',
            label: 'Primaria ',
        },
        {
            value: 'Basicos',
            label: 'Basicos',
        },
        {
            value: 'Diversificado',
            label: 'Diversificado',
        },
        {
            value: 'Universidad',
            label: 'Universidad',
        },
        {
            value: 'Ninguno',
            label: 'Ninguno',
        }
    ];


    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>

            <form onSubmit={handleSubmit}>
                <Typography className='titulo' variant="h4" component="h4" align="center" mt={5}>
                    Registros de Usuarios
                </Typography>

                <TextField
                    fullWidth
                    label="Ingrese nombre"
                    name="nombre"
                    required
                    variant="outlined"
                    margin="normal"
                    type="text"
                    value={formData.nombre}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    label="Ingrese apellido"
                    name="apellido"
                    required
                    variant="outlined"
                    margin="normal"
                    type="text"
                    value={formData.apellido}
                    onChange={handleInputChange}
                />
                 <TextField
                    fullWidth
                    label="Ingrese edad"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    variant="outlined"
                    type="number"
                    required
                    margin="normal"
                />


                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Sexo</FormLabel>
                    <RadioGroup
                        name="genero"
                        value={formData.genero}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="masculino" control={<Radio checked={formData.genero=="masculino"}/>} label="Masculino" />
                        <FormControlLabel value="femenino" control={<Radio checked={formData.genero=="femenino"} />} label="Femenino" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    fullWidth
                    label="Nivel de estudios"
                    name="estudios"
                    value={formData.estudios}
                    variant="outlined"
                    onChange={handleInputChange}
                    required
                    margin="normal"
                    select
                >
                    {
                        listaEstudios.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                    fullWidth
                    label="Ingrese usuario"
                    name="usuario"
                    required
                    variant="outlined"
                    margin="normal"
                    type="text"
                    value={formData.usuario}
                    onChange={handleInputChange}
                />

                <TextField
                    fullWidth
                    label="Contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    variant="outlined"
                    type="password"
                    required
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Confirmacion de contraseña"
                    name="contrasena"
                    value={formData.contrasena}
                    onChange={handleInputChange}
                    variant="outlined"
                    type="password"
                    required
                    margin="normal"
                />

               

                


                <Stack direction="row" spacing={2} justifyContent="center" marginTop={2}>
                    <Button variant="contained" color="primary" type="submit">
                        Registrar Usuario
                    </Button>
                </Stack>
            </form>


            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Paper style={{ padding: "20px" }}>
                        <Typography variant="h5" component="div" gutterBottom>
                            Datos Registrados Correctamente
                        </Typography>
                        <Typography variant="body1">
                            Nombre: {formData.nombre}<br />
                            Apellido: {formData.apellido}<br />
                            Edad: {formData.edad}<br />
                            Género: {formData.genero}<br />
                            Escolaridad: {formData.estudios}<br />
                            Usuario: {formData.usuario}<br />
                            Contraseña: {formData.password}<br />
                            Confirmacion de Contraseña: {formData.contrasena}<br/>
                        </Typography>
                        <Button variant="outlined" color="primary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Paper>
                </Box>
            </Modal>


        </div>
    )
}
