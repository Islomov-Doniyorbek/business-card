'use client'
import Logo from "@/public/hisobchi-logo366.svg"
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaEnvelope, FaGlobe, FaGlobeAfrica, FaInstagram, FaMapPin, FaPhone, FaPhoneAlt, FaShareAlt, FaTelegramPlane } from "react-icons/fa";
import { FaTelegram} from "react-icons/fa6";


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
      link: "https://t.me/hisobchi_official",
    },
    {
      id:1,
      icon: <FaInstagram/>,
      txt: "@hisobchi.pro",
      link: "https://hisobchi.pro"
    },
    {
      id:2,
      icon: <FaGlobe/>,
      txt: "www.hisobchi-pro.uz",
      link: "www.hisobchi-pro.uz"
    },
  ]
  const contact = [
    {
      id:0,
      icon: <FaPhone />,
      txt: "+998 77 287 01 10",
      link: "https://t.me/marufjon_qodirov",
      tel: true
    },
    {
      id:1,
      icon: <FaPhone />,
      txt: "+998 94 009 30 01",
      link: "https://t.me/marufjon_qodirov",
      tel: true
    },
    {
      id:2,
      icon: <FaEnvelope/>,
      txt: "hisobchi-official.@gmail.com",
      link: "https://hisobchi-official.@gmail.com"
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

function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value)
    .then(() => {
      console.log(`"${value}" buferga nusxalandi!`);
    })
    .catch(err => {
      console.error('Buferga nusxalashda xatolik:', err);
    });
}


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
    <div className=" w-full min-h-screen  pb-1 px-0.5">
      <div className="header bg-[#02544f] border border-[rgb(255,153,0)] pt-10 pb-6 ">
        <div className="logo w-full flex bg-[#02544f] justify-center items-center pt-3.5">
          <Image src={Logo} width={280} alt="Logo"/>
        </div>
        {/* <div className="flex mt-3 text-2xl text-[#f0ffff] w-full justify-center items-center gap-2">
          <p>Buxgalteriya</p>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f0ffff]"></div>
          <p>Outsorsing</p>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f0ffff]"></div>
          <p>Soliq</p>
        </div> */}
        {/* shadow-[inset_0_2px_6px_rgb(255,153,0)] */}
        <div className="smmBtns w-full flex items-center justify-center gap-5 mt-6">
          <button className="bg-[#02544f] text-[#f0ffff] text-sm transition duration-700 rounded-full w-10 h-10 flex items-center justify-center border border-[rgb(255,153,0)]
          hover:bg-[#f0ffff] hover:text-[#02544f]">
            <FaPhoneAlt  className=""/>
          </button>
          <button className="bg-[#02544f] text-[#f0ffff] text-sm transition duration-700 rounded-full w-10 h-10 flex items-center justify-center border border-[rgb(255,153,0)]
          hover:bg-[#f0ffff] hover:text-[#02544f]">
            <FaEnvelope className=""/>
          </button>
          <button className="bg-[#02544f] text-[#f0ffff] text-sm transition duration-700 rounded-full w-10 h-10 flex items-center justify-center border border-[rgb(255,153,0)]
          hover:bg-[#f0ffff] hover:text-[#02544f]">
            <FaShareAlt
            onClick={handleShare}
            className=""/>
          </button>
        </div>
      </div>

      <div className="px-2 py-5 bg-[#00544f] border border-[rgb(255,153,0)] mt-0.5">
        <h3 className="text-lg text-center text-[#f0ffff]">Ijtimoiy tarmoqlar</h3>
        {
          smms.map(l=>{
            return (
              <div key={l.id}
              className="
              flex items-center gap-4
                px-3 py-2 rounded-[7px] border border-[rgb(255,153,0)] shadow-[inset_0_0_6px_rgba(255,153,0,0.7)]
               bg-[#00000033] text-[#f0ffff] mt-2
              ">
                <p className="text-sm flex items-center">{l.icon}</p> 
                <Link href={l.link} className="text-sm flex items-center">{l.txt}</Link>
              </div>
            )
          })
        }
        
      </div>
      <div className="px-2 py-5 bg-[#00544f] border border-[rgb(255,153,0)]  mt-0.5">
        <h3 className="text-lg text-center text-[#f0ffff]">Aloqa</h3>
        {
          contact.map(l=>{
            return (
              <div key={l.id}
              className="
              flex items-center gap-4
              py-2 px-3 justify-between rounded-[7px]
              bg-[#00000033] border border-[rgb(255,153,0)] text-[#f0ffff] mt-2 shadow-[inset_0_0_6px_rgba(255,153,0,0.7)]
              ">
                <p className="flex items-center gap-1.5">{l.icon}
                {l.link ? <Link href={l.link} className="text-sm">{l.txt}</Link> : <span className="text-sm">{l.txt}</span>}</p>
                <p>{l.tel ? <Link href={l.link}><FaTelegramPlane /></Link> : ""}</p>
                
              </div>
            )
          })
        }
       

        
      </div>
      <div className="px-2 py-5 border border-[rgb(255,153,0)] bg-[#00544f] flex flex-col items-center gap-1.5
               pt-2 my-0.5 text-[#f0ffff] ">

               <h3 className="text-lg text-center text-[#f0ffff]">Manzil</h3>
          <p className="py-2 px-3 rounded-[7px] border border-[rgb(255,153,0)]
              bg-[#00000033] text-[#f0ffff] mt-2 text-sm">
            
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
