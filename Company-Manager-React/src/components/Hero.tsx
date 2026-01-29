const Hero = ({username,companyName}:{username:string,companyName:string}) => {

  return (
    <section className="bg-orange-100 rounded-lg mx-5 my-2 h-auto text-center">
        <h3 className="text-3xl">{`Welcome back ${username}!`}</h3>
        <h4 className="text-2xl font-semibold">{`to your online portal for ${companyName}`}</h4>
    </section>
  )
}

export default Hero