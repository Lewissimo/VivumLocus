import React from 'react';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import AppWindow from '../AppWindow';
import file from './doTest/piek.pdf';
import './documents.scss';
import Folder from './Folder';

const Documents = () => {
  return (
    <AppWindow>
      <div className='row'>
        <div className='document col-12 col-sm-6 col-lg-3 d-flex flex-column'>
            <a href={file} target='_blank' rel="noopener noreferrer" aria-label="Otwórz Umowę"></a>
              <iframe src={file} width="150" height="200" title='umowa'/>
              <span>Umowa</span>
        </div>
        <div className='document col-12 col-sm-6 col-lg-3 d-flex flex-column'>
            <a href={file} target='_blank' rel="noopener noreferrer" aria-label="Otwórz Umowę"></a>
              <iframe src={file} width="150" height="200" title='umowa'/>
              <span>Umowa</span>
        </div>
        <div className='document col-12 col-sm-6 col-lg-3 d-flex flex-column'>
            <a href={file} target='_blank' rel="noopener noreferrer" aria-label="Otwórz Umowę"></a>
              <iframe src={file} width="150" height="200" title='umowa'/>
              <span>Umowa</span>
        </div>
        <div className='folder col-12 col-sm-6 col-lg-3 d-flex align-items-center'>
          <Folder />
        </div>
      </div>
    </AppWindow>
  );
}

export default Documents;
