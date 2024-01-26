import React, { KeyboardEventHandler, useEffect } from 'react';
import { NavigateAction, ToolbarProps, View } from 'react-big-calendar';

interface CustomToolbarProps extends ToolbarProps {
    onViewChange: (newView: View) => void;
    currentView: string;
    label: string;
  }

  const Toolbar: React.FC<CustomToolbarProps> = ({ onNavigate, label, onViewChange, currentView }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.code === 'Comma' || e.code === 'Period') {
            e.preventDefault(); // Zapobiegamy domyślnej akcji (np. przewijaniu strony) dla tych klawiszy
            if (e.code === 'Comma') {
                console.log('sad')
              onNavigate('PREV');
            }
            if (e.code === 'Period') {
              onNavigate('NEXT');
            }
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    const goToBack = () => {
      onNavigate('PREV');
    };
  
    const goToNext = () => {
      onNavigate('NEXT');
    };
  
    const goToCurrent = () => {
      onNavigate('TODAY');
    }

    const changeView = (newView: View) => {
        onViewChange(newView);
    };
    return (
      <div className='Toolbar'>
        <div className='navi'>
            <button onClick={goToBack}>&lt;</button>
            <button onClick={goToCurrent}>Dziś</button>
            <button onClick={goToNext}>&gt;</button>
        </div>
        <span className='currentDate'>{label}</span>
        <div className='viewTools'>
            <button onClick={() => onViewChange('month')} className={currentView === 'month' ? 'active' : ''}>
                Miesiąc
            </button>
            <button onClick={() => onViewChange('week')} className={currentView === 'week' ? 'active' : ''}>
                Tydzień
            </button>
            <button onClick={() => onViewChange('day')} className={currentView === 'day' ? 'active' : ''}>
                Dzień
            </button>
        </div>
      </div>
    );
  };

  export default Toolbar