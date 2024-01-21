import React from 'react'
import img from '../../../assets/matematyka.jpg';
import './contact.scss'
const EmployeeDescription = () => {
  return (
    <div className='EmpDescription'>
        <img src={img} alt='' width={100} />
        <div className='Name'>
            Kamil Lewiński
        </div>
        <div className='Description'>
        Z przyjemnością przedstawiamy Pana Jana Kowalskiego, naszego niezawodnego Koordynatora Kamienicy, który od ponad 10 lat z sukcesem zarządza naszym budynkiem. Jan jest absolwentem Zarządzania Nieruchomościami na Uniwersytecie Warszawskim i posiada licencję zarządcy nieruchomości. Przez lata swojej pracy zdobył rozległe doświadczenie w zarządzaniu, utrzymaniu i modernizacji nieruchomości mieszkalnych.

Znakomicie łączy umiejętności techniczne z doskonałym zrozumieniem potrzeb mieszkańców. Jego podejście charakteryzuje się indywidualnym podejściem do każdego lokatora, dbałością o detale oraz profesjonalizmem. Jan jest zawsze gotowy służyć pomocą i radą, zarówno w kwestiach technicznych, jak i administracyjnych.
        </div>
        <div className='Contact'>
            <ul>
                <li>Mail: kml.lewinski@gmail.com</li>
                <li>Tel: 515135106</li>
            </ul>
        </div>
    </div>
  )
}

export default EmployeeDescription