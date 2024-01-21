import Image from "next/image"
export default function SponsersPage() {
  const data = {
    gold: [
      {
        image:'/SponserLogos/devfolio.png',
        label: 'DEVFOLIO LOGO',
        link: 'https://devfolio.co'
      },
      {
        image:'/SponserLogos/polygon.png',
        label: 'POLYGON LOGO',
        link:'https://polygon.technology/'
      }
      ],
      silver:[
      {
        image:'/SponserLogos/replit.png',
        label: 'REPLIT LOGO',
        link:'https://replit.com'
      },
    ],
    bronze:[

    ],
    
}
  const Card = ({image,label,link}) =>{
    return (
      <div className="flex items-center  justify-center hover:opacity-60 cursor-pointer" onClick={()=>{window.open(link,"_blank")}} >
          <Image src={image} alt={label} className="h-16 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
      </div>
    )
  }
  return (
      <div className="flex flex-col place-items-center my-20">
        <h2 className="w-full  text-center md:text-6xl text-4xl font-Minecraft uppercase text-black  tracking-widest">
          Our Premium Sponsors
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col justify-around gap-16 my-12 px-4">

          <div className="flex flex-col justify-center gap-12">
            <div className="md:text-7xl text-3xl mt-6 font-bold text-[#FFD700] font-Space-Grotesk text-center">
              Gold Sponsors
            </div>
            <div className="flex flex-row flex-wrap  justify-center md:gap-8 gap-6">
            {data.gold.length===0?<div>Coming Soon</div>:data.gold.map((sponser,index)=>{
                return <Card image={sponser.image} key={index} link={sponser.link} label={sponser.label}/>
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="md:text-6xl text-3xl font-bold font-Space-Grotesk text-center text-[#C0C0C0]">
              Silver Sponsors
            </div>
            <div className="flex flex-row flex-wrap  justify-center md:gap-8 gap-6">
            {data.silver.length===0?<div>Coming Soon</div>:data.silver.map((sponser,index)=>{
                return <Card image={sponser.image} key={index} link={sponser.link} label={sponser.label}/>
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="md:text-5xl text-3xl font-bold font-Space-Grotesk text-center text-[#CD7F32]">
              Bronze Sponsors
            </div>
            <div className="flex flex-row flex-wrap  justify-center md:gap-8 gap-6">
            {data.bronze.length===0?<div>Coming Soon</div>:data.bronze.map((sponser,index)=>{
                return <Card image={sponser.image} key={index} link={sponser.link} label={sponser.label}/>
              })}
            </div>
          </div>

        </div>
      </div>
  )
}