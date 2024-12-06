import { useEffect, useRef, useState } from 'react'
import './App.css'
import TeamCard from './components/team/TeamCard';
import './index.scss';
import NaflowsButton from '../@components/button';

function App() {
  const ref = useRef();
  const [theme, setTheme] = useState('light');
  const [teams, setTeams] = useState();
  const [persons, setPersons] = useState();
  const [challenges, setChallenges] = useState();

  const [windowMiddle, setWindowMiddle] = useState(window.innerHeight / 2);
  
  useEffect(() => {
    fetch("../public/team.json").then(res => res.json()).then(data => {
      setTeams(data)
      console.log(data)
    });
    fetch("../public/membres.json").then(res => res.json()).then(data => setPersons(data));
    fetch("../public/defis.json").then(res => res.json()).then(data => {
      setChallenges(data)
      console.log(data,"are challenges")
    });
  }, [])


  useEffect(() => {
    const handleResize = () => {
      const teamCards = document.querySelectorAll('.team-card');
      teamCards.forEach((teamCard) => {
        teamCard.style.left = `${windowMiddle}px`;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  function PoissonMode() {
    return (
      <button onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}>
        <img src={
          theme === 'light' ? "../public/Poisson_dark_mode.png" : "../public/Poisson_light_mode.png"
        } />
      </button>
    );
  }
  
  return (
    <div className={
      theme === 'light' ? 'light' : 'dark '
    }>
    <PoissonMode />
      <div className="display-teams-info " ref={ref}>
        <div className="superteam-name">
            Dev&apos;astateurs
          
        </div>
        <div className="team-cards" style={{
          top : `${50}px`
        }}>
          {
            challenges?.map((challenge,index) => {
              return (
                <div key={challenge.id} className='team-card'>
                  <div className={
                  theme === 'light' ? 'team-card-light' : 'team-card-dark '
                  }>
                    <TeamCard team={challenge} users={persons} /></div>
                  </div>
              )
            } )
          }
        </div>
      </div>
    </div>
  )
}

export default App
