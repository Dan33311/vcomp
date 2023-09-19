import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'

const Camera = () => {
  const webcamRef = useRef(null)
  const [imageSrc, setImageSrc] = useState(null)

  const capture = () => {
    const newImageSrc = webcamRef.current.getScreenshot()
    setImageSrc(newImageSrc)

    console.log(imageSrc)
  }

  const handleDownload = () => {
    if (imageSrc) {
      const link = document.createElement('a')
      link.href = imageSrc
      link.download = 'captured-image.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }


  return (
    <>
      <div className='camera'>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
        />
        <button onClick={capture}>Capture Photo</button>
      </div>
      <div>
        {imageSrc && (
          <div className='captured'>
            <img src={imageSrc} alt='' />
            <button className='download-b' onClick={handleDownload}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.163 2.819C9 3.139 9 3.559 9 4.4V11H7.803c-.883 0-1.325 0-1.534.176a.75.75 0 0 0-.266.62c.017.274.322.593.931 1.232l4.198 4.401c.302.318.453.476.63.535a.749.749 0 0 0 .476 0c.177-.059.328-.217.63-.535l4.198-4.4c.61-.64.914-.96.93-1.233a.75.75 0 0 0-.265-.62C17.522 11 17.081 11 16.197 11H15V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 2 13.441 2 12.6 2h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zM5 21a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fill="#1d1f28"></path></g></svg>Download Image</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Camera