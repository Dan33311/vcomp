import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import DownloadIcon from './DownloadIcon'
import CaptureIcon from './CaptureIcon'
import { ref, uploadString } from 'firebase/storage'
import { storage } from '../utils/firebase'
import { v4 } from 'uuid'
import '../Instagram.css'
import { filterValues } from '../utils/FilterValues'

const Camera = () => {
  const webcamRef = useRef(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [filterClass, setFilterClass] = useState("")


  const capture = () => {
    const newImageSrc = webcamRef.current.getScreenshot()
    // console.log("newImageSrc:", newImageSrc)
    setImageSrc(newImageSrc)
  }
  
  // console.log("Capture function => ", "imageSrc=", imageSrc)

  const handleDownload = () => {
    if (imageSrc) {;
      // const link = document.createElement('a')
      // link.href = imageSrc
      // link.download = 'captured-image.jpg'
      // document.body.appendChild(link)
      // link.click()
      // document.body.removeChild(link)
      const storageRef = ref(storage, v4())
      uploadString(storageRef, imageSrc, 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!');
      });
    }
  }

  const handleFilterChange = (e) => {
    setFilterClass(e.target.value)
    console.log("filterClass:", filterClass);
  }


  return (
    <>
      <div className='camera'>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
        />
        <button className='capture-b' onClick={capture}><CaptureIcon />Capture Photo</button>
      </div>
      <div>
        {imageSrc ? (
          <div className='captured'>
            <img className={filterClass} src={imageSrc} alt='' />
            <button className='download-b' onClick={handleDownload}><DownloadIcon />Download Image</button>
          </div>
        ) : <img className='no-image' src='https://jawahar-book-centre.com/wp-content/uploads/2020/10/image-not-available.jpg' />}
        <div>
          <h2>Image Filters and effects</h2>
          <div>
            <label>Choose a filter: </label>
            <select value={filterClass} onChange={handleFilterChange}>
              {filterValues.map(value => (
                <option value={value.class}>{value.name}</option>
              ))}
            </select>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Camera