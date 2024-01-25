import React, { ChangeEvent, DragEvent, useEffect, useState } from 'react'
import './ReportCase.scss'
import SendIcon from '@mui/icons-material/Send';
const ReportCase = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [dragCounter, setDragCounter] = useState<boolean>(false);


  useEffect(() => {
    const handleDragEnter = (event: Event) => {
      event.preventDefault();
      setDragCounter(prev => !prev);
    };

    const handleDragLeave = (event: Event) => {
      event.preventDefault();
      setDragCounter(prev => !prev);
    };

    const handleDragOver = (event: Event) => {
      event.preventDefault();
    };

    const handleDrop = (event: Event) => {
      event.preventDefault();
      setDragCounter(false);
    };

    window.addEventListener('dragenter', handleDragEnter);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleDragOver = (e: DragEvent) => {
    
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setSelectedFiles(files);
    setPreviews(files.map(file => URL.createObjectURL(file)));
  };


  return (
    <div>
      <h2>
        Zgłość sprawę
      </h2>
      <form id='reportCase'>
        <label htmlFor='title'>Tytuł</label>
        <input type='text' id='title' required minLength={3} maxLength={15}/>
        <label htmlFor='taskDescription'>Opis</label>
        <textarea id='taskDescription' required></textarea>
        <label htmlFor='tastPhoto' id='fileLabel' onDragOver={handleDragOver}
        style={dragCounter ? {width: '300px', height: '300px'} 
        : {width: '120px', height: '70px', position: 'static'}}>{dragCounter ? "Upuść tutaj" : "Wybierz zdjęcie"}</label>
        <input type='file' id='tastPhoto' required multiple   
         onChange={handleFileChange} />
        <button type='submit'><SendIcon /></button>
      </form>
    </div>
  )
}

export default ReportCase
