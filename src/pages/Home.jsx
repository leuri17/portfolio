import PresentationCard from '../components/PresentationCard'
import '../styles/HomePage.css'

const Home = () => {
  return (
    <>
      <PresentationCard />

      <div id="about-me" style={{ padding: '50px', width: '45vw', animation: 'slide-in 1.25s' }}>
        <h1>About me</h1>
        <p>
          I&apos;m a technitian in administration of networked computer systems and also a
          programmer. I like Full-Stack development, specializing in React for the
          Front-End, Node.js and Spring Boot for the Back-End and SQL server, PostgreSQL, and
          MongoDB for the databases.
        </p>
        <p>
          I have experience as a software developer, working  both in companies and on my own projects.
          I&apos;m currently working as a Junior tester at <span style={{ fontWeight: 'bolder' }}>Sopra Steria</span>.
        </p>
      </div>
    </>
  )
}

export default Home
