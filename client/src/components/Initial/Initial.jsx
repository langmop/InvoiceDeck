import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './Initial.module.css'
const Initial = () => {
    const history = useHistory()
    const location = useLocation()
  return (
    <div onClick={()=> history.push('/login')} className={styles.move}><img className="majorImage" style={{width: '325px', cursor: 'pointer',height:'325px'}} onClick={()=> history.push('/')} src="https://cdn.discordapp.com/attachments/902222411368370219/957656879113310248/Invoice_Deck-logos_black.png" alt="arc-invoice" /> </div>
  )
}

export default Initial