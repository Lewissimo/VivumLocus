import React, { ChangeEvent, DragEvent, useEffect, useState } from 'react'
import './ReportCase.scss'
import SendIcon from '@mui/icons-material/Send';
import MainView from '../../Templates/MainView';
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
    <MainView>

      <div className='ReportCaseBox'>
        <form id='reportCase'>
          <div className='titleBox'>
            <label htmlFor='title'>Tytuł</label>
            <input type='text' id='title' required minLength={3} maxLength={15}/>
          </div>
          <label htmlFor='taskDescription' id='tastDescriptionLabel'>Opisz dokładnie powstały problem</label>
          <textarea id='taskDescription' required></textarea>
          <label htmlFor='tastPhoto' id='fileLabel' onDragOver={handleDragOver}
          style={dragCounter ? { height: '300px'} 
          : {height: '70px', position: 'static'}}>{dragCounter ? "Upuść tutaj" : "Wybierz zdjęcie"}</label>
          <input type='file' id='tastPhoto' required multiple   
          onChange={handleFileChange} />
          <div className='PhotosBox'></div>
          <button type='submit'><SendIcon /></button>
        </form>
      </div>
    </MainView>
  )
}

export default ReportCase
