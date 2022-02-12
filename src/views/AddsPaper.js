import React, {  useState } from 'react'
import { Paper, Dialog } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './App.css';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';


export default function AddsPaper(props) {
    const [open, setOpen] = useState(true);

    const onClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {!open ? null : <Paper className={props.className} style={{
                backgroundColor: '#C5C8CF' }}>
                <IconButton aria-label="close" color='grey' onClick={onClose} className='IconClose'>
                    <CloseIcon />
                </IconButton>
                <p style={{ marginLeft: '40%' }}>Adds</p>
            </Paper>
            }

          </div>
      )
}
