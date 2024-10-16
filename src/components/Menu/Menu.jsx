import React,{useState} from 'react'
import { Box,TextField,Collapse, Typography, colors } from '@mui/material'
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import Container from '../Container/Container';
import BackupIcon from '@mui/icons-material/Backup';
import RestoreIcon from '@mui/icons-material/Restore';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Profile from '../Profile/Profile';

export default function Menu() {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
    const [open, setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    const [click,setClick] = useState(false)
    const handleClose = ()=>{
        setOpen(!open)
        setOpen1(false)
    }
    const handleClose1 = ()=>{
        setOpen(false)
        setOpen1(!open1)
    }
    const handleClick = () => {
        setClick(true);
      };
      const handleClose2 = () => {
        setClick(false);
      };
  return (
    <Box>
        <Box sx={{
        display:'flex',
        
        }}>
            <Box sx={{
                marginLeft:'20px',
                paddingTop:'4px'
            }}>
                <TextField
                id="outlined-basic"
                label="Search my library"
                type="search"
                InputLabelProps={{
                    style: { color: 'white' }
                }}
                InputProps={{
                    style: { height: '30px',color:'white'}, 
                }}
                variant="standard"
                />
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'end',
                marginLeft:'60px'
            }}>
                <FormatLineSpacingIcon sx={{fontSize:30,color:'white', position:'relative'}} 
                    onClick={handleClose}
                    />
                    <Collapse in={open} sx={{backgroundColor:'#0755a3',position:'absolute',left:'464px',top:'50px', width:'100px',borderRadius:'5px'}}
                    >
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px'}}>Books</Typography></Box>
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px'}}>Date</Typography></Box>
                        <Box
                        sx={{
                                height: '1px',         
                                backgroundColor: 'white', 
                                width: '100%',          
                        }}
                        />
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px'}}>Ascend</Typography></Box>
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px'}}>Descend</Typography></Box>
                    </Collapse>
                <SettingsIcon sx={{fontSize:30,color:'white', paddingX:'25px',position:'relative'}}
                    onClick={handleClose1}
                    />
                    <Collapse in={open1} sx={{backgroundColor:'#0755a3',position:'absolute',left:'514px',top:'50px', width:'100px',borderRadius:'5px'}}
                        >
                            <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'10px'}}>Settings</Typography></Box>
                            <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'10px'}}>Document</Typography></Box>
                            <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'10px'}}>Feedback</Typography></Box>
                            <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'10px'}}>Roadmap</Typography></Box>
                            <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'10px'}}>Our Website</Typography></Box>
                            <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'10px'}}>Translation</Typography></Box>
                            <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'10px'}}>Export All</Typography></Box>
                        </Collapse>
                <CloudDoneIcon sx={{fontSize:30,color:'white'}} onClick={handleClick}/>
                        <>                       
                        <BootstrapDialog
                            onClose={handleClose2}
                            aria-labelledby="customized-dialog-title"
                            open={click}
                            
                        >
                           <Box sx={{display:'flex'}}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                Choose Your operator
                                </DialogTitle>
                                <IconButton
                                aria-label="close"
                                onClick={handleClose2}
                                sx={(theme) => ({
                                    position: 'absolute',
                                    right: 12,
                                    top: '25px',
                                    color: 'black',
                                })}
                                >                            
                                </IconButton>
                                <CloseIcon sx={{
                                    marginTop:'20px',
                                    marginRight:'10px'
                                }}/>
                           </Box>
                            <DialogContent dividers  
                            >
                                <Box sx={{
                                    display:'flex',
                                    justifyContent:'center'
                                }}>
                                    <BackupIcon sx={{fontSize:'50px',color:'#777',padding:'15px'}}/>
                                    <RestoreIcon sx={{fontSize:'50px',color:'#777',padding:'15px'}}/>
                                </Box>
                            </DialogContent>
                            </BootstrapDialog>
                        </>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'end',
                marginLeft:'700px'
            }}>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    >
                    Import
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                        multiple
                    />
                </Button>
            </Box>
            <Profile/>
        </Box>
        <Container/>
    </Box>
  )
}
