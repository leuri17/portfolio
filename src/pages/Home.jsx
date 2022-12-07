import PresentationCard from '../components/PresentationCard'

const Home = () => {
  return (
    <>
      <PresentationCard />

      <div id="bout-me" style={{ padding: '50px', width: '45vw' }}>
        <h1>About me</h1>
        <p>
          I&apos;m a technitian in administration of networked computer systems and also
          a self-trained programmer. I like Full-Stack development, specializing in React for the
          Front-End, Node.js and Spring Boot for the Back-End and SQL server, PostgreSQL, and
          MongoDB for the databases.
        </p>
      </div>
    </>
  )
}

export default Home