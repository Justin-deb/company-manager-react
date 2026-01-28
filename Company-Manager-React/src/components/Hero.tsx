const Hero = ({username,companyName}:{username:string,companyName:string}) => {

  return (
    <>
        <h3>{`Welcome back ${username} to the online portal of ${companyName}`}</h3>
    </>
  )
}

export default Hero