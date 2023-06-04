import './style.css'
import { ReactComponent as Celsius } from '../../assets/icon/celsius-degrees-symbol-of-temperature-svgrepo-com.svg'
import { ReactComponent as Fahrenjeit } from '../../assets/icon/fahrenheit-meausre-svgrepo-com.svg'
import { ReactComponent as Light } from '../../assets/icon/day.svg'
import { ReactComponent as Night } from '../../assets/icon/night-mode.svg'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectTheme, selectUnit } from '../../store/selectors'
import { setTheme, setUnit } from '../../store/slices/optionsSlice'



export default function Setting() {
  const dispatch = useAppDispatch()
  const unit = useAppSelector(selectUnit)
  const theme = useAppSelector(selectTheme)

  return (
    <div className="setting">
      <div className="setting__units">
        <Light className={`setting__icon ${theme === 'light' ? 'active': '' }`} onClick={() => dispatch(setTheme('light'))}/>
        <div className="setting__unit-divider"/>
        <Night className={`setting__icon ${theme !== 'light' ? 'active': '' }`} onClick={() => dispatch(setTheme('dark'))}/>
      </div>
      <div className="setting__units">
        <Celsius className={`setting__icon ${unit === 'metric' ? 'active': '' }`} onClick={() => dispatch(setUnit('metric'))}/>
        <div className="setting__unit-divider"/>
        <Fahrenjeit className={`setting__icon ${unit !== 'metric' ? 'active': '' }`} onClick={() => dispatch(setUnit('fahrenheit'))} />
      </div>
    </div>
  )
}