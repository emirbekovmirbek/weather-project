import { ICity } from '../../types/types'
import './style.css'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectVisibleDropdown } from '../../store/selectors';
import { onChangeVisible } from '../../store/slices/optionsSlice';

interface PropType {
  list: ICity[],
  onSelect: (city: ICity) => void
}
export default function Dropdown({list, onSelect}: PropType) {
  const dispatch = useAppDispatch()
  const visible = useAppSelector(selectVisibleDropdown)
  const handleSelect = (city: ICity) => {
    onSelect(city)
    dispatch(onChangeVisible(false))
  }
  
  return (
    <ul
      className={`list-city ${ visible ? 'show': 'hidden'}`}
    >
    {
      list.map((item) =>  <li key={item.id} onClick={() => handleSelect(item)} className="list-city__item">{`${item.name}, ${item.sys.country}`}</li>)
    }
  </ul>
  )
}
