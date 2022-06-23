import React,{useState} from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/Schedule.css';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 550,
    bgcolor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    boxShadow: 24
  };

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [open,setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className='schedulescreen'>
            <Navbar/>
            <div className='scheduledash'>
                <p>Elige la fecha para tu reserva</p>
                <div className='dashboard'>
                    <div className='map'>
                        <div className='zones'>
                            <IconButton onClick={handleOpen} color='success' className='first' size="large">
                                <GpsFixedIcon fontSize="inherit"/>
                            </IconButton>
                            <IconButton color='error' className='second' size="large">
                                <GpsFixedIcon fontSize="inherit"/>
                            </IconButton>
                            <IconButton color='success' className='third' size="large">
                                <GpsFixedIcon fontSize="inherit"/>
                            </IconButton>
                            <IconButton color='error' className='fourth' size="large">
                                <GpsFixedIcon fontSize="inherit"/>
                            </IconButton>
                        </div>
                    </div>
                    <div className='calendar'>
                        <Calendar
                        value={selectedDay}
                        onChange={setSelectedDay}
                        shouldHighlightWeekends
                        />
                    </div> 
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='zonedetail'>
                        <img src='https://www.sincable.mx/wp-content/uploads/2020/08/MoD-4-sombrilla-de-playa-40463696_s.jpg'/>
                        <div className='zoneinfo'>
                            <div className='zoneinfodetail'>
                                <p id='title'>Lorem ipsum</p>
                                <p>Lorem ipsum dolor sit amet. Non adipisci nisi ea doloremque quae nihil excepturi ea earum sequi.</p>
                                <p id='status'>Disponible</p>
                            </div>
                            <div className='zoneactions'>
                                <Button color='info' variant="contained" style={{textTransform:'none',width:'50%'}}>Reservar</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Schedule;