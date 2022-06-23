import React,{useState,useRef} from 'react';
import Navbar from '../Components/Navbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Urls from '../Constants/Urls';
import '../Styles/Home.css';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 550,
    bgcolor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
  };

const Home = () => {
    const [open,setOpen] = useState(false);
    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [load,setLoad] = useState(false);
    const [snack, setSnack] = useState(false);
    const [message, setMessage] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = () => {
        setSnack(true);
    };

    const navigate = useNavigate();

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnack(false);
    };
    
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleCloseSnack}>
            Aceptar
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnack}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    const n = useRef(null);
    const l = useRef(null);
    const e = useRef(null);
    const p = useRef(null);

    const handleName = () => {
        setName(n.current.value)
    }

    const handleLastname = () => {
        setLastname(l.current.value)
    }

    const handleEmail = () => {
        setEmail(e.current.value)
    }

    const handlePhone = () => {
        setPhone(p.current.value)
    }

    const handleCancel = () => {
        setName('');
        setLastname('');
        setEmail('');
        setPhone('');
        handleClose();
    }

    const handleSend = async () => {
        setLoad(true)
        if(name === ''){
            setMessage('Inserta un nombre valido')
            handleClick()
            setLoad(false)
        }
        else if(lastname === ''){
            setMessage('Inserta un apellido valido')
            handleClick()
            setLoad(false)
        }
        else if(email === ''){
            setMessage('Inserta un email valido')
            handleClick()
            setLoad(false)
        }
        else if(phone === ''){
            setMessage('Inserta un telefono valido')
            handleClick()
            setLoad(false)
        }
        else{
            const url = Urls.User
            const json = {
                "userName": name,
                "userLastName": lastname,
                "userPhoneNumber": phone,
                "email": email
              }
            await axios.post(url,json)
              .then(res => {
                    console.log(res.data)
                    setMessage('Usuario registrado')
                    localStorage.setItem('user',JSON.stringify(json))
                    handleClick()
                    setLoad(false)
                    navigate("../Schedule");
              }).catch(err => {
                    setMessage('El servicio de registro fallo')
                    handleClick()
                    setLoad(false)
              })
        }
        
    }

    return(
        <div className='homescreen'>
            <Navbar/>
            <div className='home-batch'>
                <div className='home-title'>
                    <span>El Haguay</span>
                </div>
                <div className='home-detail'>
                    <div className='home-button'>
                        <Button onClick={handleOpen} variant="text" style={{color:"white",textTransform:"none",fontSize:"30px"}}>Reservar</Button>
                    </div>
                    <div className='home-text'>
                        <p>
                        Lorem ipsum dolor sit amet. Non adipisci nisi ea doloremque quae nihil excepturi ea earum sequi. Eos dolorem rerum et praesentium tempore et fugiat dolor est quis galisum ut autem adipisci est rerum nisi. Ut voluptatem quidem id doloribus enim aut minus provident At necessitatibus vitae At dolorem voluptatibus?
                        </p>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='home-modal'>
                        <div className='home-modals-input'>
                            <span>¿Listo para reservar?</span>
                            <TextField onChange={handleName} inputRef={n} value={name} label='Nombre' variant='outlined' style={{width:'90%',margin:'15px',alignSelf:'center'}}/>
                            <TextField onChange={handleLastname} inputRef={l} value={lastname} label='Apellidos' variant='outlined' style={{width:'90%',margin:'15px',alignSelf:'center'}}/>
                            <TextField onChange={handleEmail} inputRef={e} value={email} label='Email' variant='outlined' style={{width:'90%',margin:'15px',alignSelf:'center'}}/>
                            <TextField onChange={handlePhone} inputRef={p} value={phone} label='Telefono' variant='outlined' style={{width:'90%',margin:'15px',alignSelf:'center'}}/> 
                        </div>
                        <div className='home-modal-buttons'>
                            {
                                load ? <CircularProgress/> : 
                                <React.Fragment>
                                    <Button onClick={handleCancel} variant='contained' color='error' style={{height:'50px',width:'120px',textTransform:"none",marginRight:'20px'}}>Cancel</Button>
                                     <Button onClick={handleSend} variant='contained' color='success'  style={{height:'50px',width:'120px',textTransform:"none"}}>Enviar</Button>
                                </React.Fragment>
                            }
                            
                        </div>
                    </div>
                </Box>
            </Modal>
            <Snackbar
                open={snack}
                autoHideDuration={3000}
                onClose={handleCloseSnack}
                message={message}
                action={action}
            />
        </div>
    )
}

export default Home;