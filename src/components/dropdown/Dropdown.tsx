import { useState } from 'react'
import { ICity } from '../../types/types'
import './style.css'

interface PropType {
  list: ICity[],
  onSelect: (city: ICity) => void
}
export default function Dropdown({list, onSelect}: PropType) {
  const [visible, setVisible] = useState(false);
  const handleSelect = (city: ICity) => {
    onSelect(city)
    setVisible(false)
  }
  
  return (
    <ul
      className={`list-city ${ visible ? 'show': 'hidden'}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
    {
      list.map((item) =>  <li key={item.id} onClick={() => handleSelect(item)} className="list-city__item">{`${item.name}, ${item.sys.country}`}</li>)
    }
  </ul>
  )
}
