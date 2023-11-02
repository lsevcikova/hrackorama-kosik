import { createContext, useContext, useState } from 'react'

export const SettingsContext = createContext()

//vlastni hook, funkce, ktera v sobe vyuziva jiny hook, hooky zacinaji use
//children jsou moje komponenty, ktere provider obaluje, vzdycky se to jmenuje children
export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }) => {
  // zapis musi byt takto s props co se jmenuje value, aby si context mohl na hodnotu sahnout
  const [settings, setSettings] = useState({
    currency: 'CZK'
  })

  const setCurrency = newCurrency => {
    setSettings({ ...settings, currency: newCurrency })
  }
  return (
    <SettingsContext.Provider value={{ ...settings, setCurrency }}>
      {children}
    </SettingsContext.Provider>
  )
}
