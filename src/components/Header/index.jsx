import { useSettings } from '../../settings-context'
import './style.css'

const Header = () => {
  // pommoci deskruturalizace se z useSettings dostanu k cemu potrebuju, vytahuju z contextu menu
  const { currency, setCurrency } = useSettings()
  const handleOnChange = event => {
    setCurrency(event.target.value)
  }
  return (
    <header>
      <div className='brand'>Hračkorama</div>
      <select value={currency} onChange={handleOnChange}>
        <option value='CZK'>CZK</option>
        <option value='EUR'>EUR</option>
        <option value='USD'>USD</option>
      </select>
      <span>Košík: 450 {currency}</span>
    </header>
  )
}

export default Header
