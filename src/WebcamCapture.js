import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux'
import {setCameraImage} from './features/cameraSlice';
import { useHistory } from 'react-router';
import './WebcamCapture.css';
const videoConstraints = {
    width:250,
    height:400,
    facingModel:"user",
};

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot()
        dispatch(setCameraImage(imageSrc))
        history.push('/preview')
    },[dispatch,history]);
    return (
        <div className='webcamCapture'>
            <Webcam
                audio={false}
                height={videoConstraints.height}
                width={videoConstraints.width}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                mirrored={true}
                videoConstraints = {videoConstraints}
            />
            <RadioButtonUncheckedIcon
                className = 'webcamCapture_button'
                onClick = {capture}
                fontSize = 'large'
            />
        </div>
    );
};

export default WebcamCapture;
