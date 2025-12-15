'use client'
import Logo from "@/public/13222.svg"
import Image from "next/image";
import { FaClock, FaEnvelope, FaGlobe, FaGlobeAfrica, FaInstagram, FaMapPin, FaPhone, FaPhoneAlt, FaShareAlt } from "react-icons/fa";
import { FaEye, FaTelegram, FaYoutube } from "react-icons/fa6";
import { MdHourglassBottom, MdLocationCity } from "react-icons/md";


export default function Home() {
  const ps = [
    {
      id:0,
      txt: "hisobchi — biznesingiz uchun ishonchli va professional buxgalteriya hamkori. Biz buxgalteriya hisobi, soliq va moliyaviy hisobotlarni qonunchilikka muvofiq yuritamiz va o‘z vaqtida topshiramiz."
    },
  ]
  const smms = [
    {
      id:0,
      icon: <FaTelegram />,
      txt: "t.me/hisobchi_official",
      link: "t.me/hisobchi_official",
    },
    {
      id:1,
      icon: <FaInstagram/>,
      txt: "@hisobchi.pro",
      link: "@hisobchi.pro"
    },
    // {
    //   id:2,
    //   icon: <FaEnvelope/>,
    //   txt: "hisobchi-official@gmail.com"
    // },
    {
      id:2,
      icon: <FaGlobe/>,
      txt: "www.hisobchi-pro.uz",
      link: "www.hisobchi-pro.uz"
    },
    // {
    //   id:3,
    //   icon: <MdHourglassBottom/>,
    //   txt: "Tez orada ...",
    //   link: "Tez orada ...",
    // },
  ]
  const contact = [
    {
      id:0,
      icon: <FaPhone />,
      txt: "+998 77 287 01 10",
    },
    {
      id:1,
      icon: <FaPhone />,
      txt: "+998 94 009 30 01",
    },
    {
      id:2,
      icon: <FaEnvelope/>,
      txt: "hisobchi-official.@gmail.com",
      link: "@hisobchi.pro"
    },
    {
      id:3,
      icon: <FaTelegram/>,
      txt: "t.me/marufjon_qodirov",
      link: "https://t.me/marufjon_qodirov"
    },
    {
      id:4,
      icon: <FaTelegram/>,
      txt: "t.me/marufjon_qodirov",
      link: "https://t.me/marufjon_qodirov"
    },
  ]



  const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Hisobchi",
        text: "Hisobchi - ishonchli buxgalteriya yechimlari",
        url: window.location.href,
      });
    } catch (error) {
      console.log("Ulashish bekor qilindi");
    }
  } else {
    alert("Brauzeringiz ulashishni qo‘llab-quvvatlamaydi");
  }
};

  return (
    <div className=" w-full min-h-screen  pb-1">
      <div className="header bg-[#02544f] border-b border-b-[#ff9900] pt-10 pb-6 ">
        <div className="logo w-full flex bg-[#02544f] justify-center items-center pt-3.5 ">
          <Image src={Logo} width={280} alt="Logo"/>
        </div>
        {/* <div className="flex mt-3 text-2xl text-[#f0ffff] w-full justify-center items-center gap-2">
          <p>Buxgalteriya</p>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f0ffff]"></div>
          <p>Outsorsing</p>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f0ffff]"></div>
          <p>Soliq</p>
        </div> */}
        <div className="smmBtns w-full flex items-center justify-center gap-5 mt-6">
          <button className="bg-[#02544f] text-[#f0ffff]  text-lg transition duration-700 rounded-full w-10 h-10 flex items-center justify-center border border-[#f0ffff]
          hover:bg-[#f0ffff] hover:text-[#02544f]">
            <FaPhoneAlt  className=""/>
          </button>
          <button className="bg-[#02544f] text-[#f0ffff]  text-lg transition duration-700 rounded-full w-10 h-10 flex items-center justify-center border border-[#f0ffff]
          hover:bg-[#f0ffff] hover:text-[#02544f]">
            <FaEnvelope className=""/>
          </button>
          <button className="bg-[#02544f] text-[#f0ffff]  text-lg transition duration-700 rounded-full w-10 h-10 flex items-center justify-center border border-[#f0ffff]
          hover:bg-[#f0ffff] hover:text-[#02544f]">
            <FaShareAlt
            onClick={handleShare}
            className=""/>
          </button>
        </div>
      </div>

      <div className="px-2 py-5 border bg-[#00544f] mt-0.5">
        <h3 className="text-2xl text-center text-[#f0ffff]">Ijtimoiy tarmoqlar</h3>
        {
          smms.map(l=>{
            return (
              <div key={l.id}
              className="
              flex items-center gap-4
                px-3 rounded-[7px]
               bg-[#00000033] text-[#f0ffff] mt-2
              ">
                <p className="text-2xl flex items-center">{l.icon}</p> 
                <p className="text-2xl flex items-center">{l.txt}</p>
              </div>
            )
          })
        }
        
      </div>
      <div className="px-2 py-5 border bg-[#00544f] mt-0.5">
        <h3 className="text-2xl text-center text-[#f0ffff]">Aloqa</h3>
        {
          contact.map(l=>{
            return (
              <div key={l.id}
              className="
              flex items-center gap-4
              pt-2 px-3 rounded-[7px]
              bg-[#00000033] text-[#f0ffff] mt-2
              ">
                <span className="text-lg">{l.icon}</span> 
                <span className="text-lg">{l.txt}</span>
              </div>
            )
          })
        }
       

        
      </div>
      <div className="px-2 py-5 border bg-[#00544f] flex flex-col items-center gap-1.5
               pt-2 my-0.5 text-[#f0ffff] ">

               <h3 className="text-2xl text-center text-[#f0ffff]">Manzil</h3>
          <p className="py-2 px-3 rounded-[7px]
              bg-[#00000033] text-[#f0ffff] mt-2">
            
            Toshkent shahar, Yakkasaroy tumani, Shota Rustaveli ko`chasi 150-uy
          <iframe
          src="https://www.google.com/maps?q=41.259924,69.223795&hl=es;z=14&output=embed"
          width="100%"
          height="150"
          className="border-none w-full h-auto rounded-[10px] mt-2 px-0.5"
          allowFullScreen
          loading="lazy"
        />
          </p>
       </div>
    </div>
  );
}
