import { useNavigate } from 'react-router-dom'
import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <nav className="sidebar">
        <div className='sidebar-item' onClick={()=> navigate("/")}>
          <img className='sidebarIcon' src={homeIcon} alt="home icon" />
          <p style={{color: '#64648C'}}>Home</p>
        </div>

        <div className='sidebar-item' onClick={() => navigate("/profile")}>
          <img className='sidebarIcon' src={profileIcon} alt="profile icon" />
          <p style={{color: '#64648C'}}>Profile</p>
        </div>
    </nav>
  )
}
