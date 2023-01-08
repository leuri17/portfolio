import PresentationCard from '../components/PresentationCard'

const Home = () => {
  return (
    <>
      <PresentationCard />

      <div id="bout-me" style={{ padding: '50px', width: '45vw', animation: 'slide-in 1.25s' }}>
        <h1>About me</h1>
        <p>
          I&apos;m a technitian in administration of networked computer systems and also a
          self-trained programmer. I like Full-Stack development, specializing in React for the
          Front-End, Node.js and Spring Boot for the Back-End and SQL server, PostgreSQL, and
          MongoDB for the databases.
        </p>
        <p>
          I don&apos;t have much work experience, but I&apos;m looking forward to gaining some and
          improving my skills, whether in the IT world or not.{' '}
        </p>
      </div>
    </>
  )
}

export default Home
