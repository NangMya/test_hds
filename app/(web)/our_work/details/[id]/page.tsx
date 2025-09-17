import Footer from "@/components/General/Footer/Footer";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import CaseStudy from "@/components/OurWork/CaseStudy";
import WavyCard4 from "@/components/WavyCard4";
import { monthAndYear } from "@/lib/helps";
import { api, Info, WorkProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

interface WorkDetailProps {
  params: {
    id: string;
  };
}
export async function generateStaticParams() {
  const works: WorkProp[] = await api.getOurWorks();
  return works.map((work) => ({
    id: work.id?.toString(),
  }));
}

const WorkDetail = async ({ params }: WorkDetailProps) => {
  const info: Info = await api.getInfo();
  const work = await api.getWorkById(params.id);

  if (!work) {
    return (
      <section className="p-10 text-center">
        <h1 className="text-xl font-bold">Work not found</h1>
        <Link href="/our_work" className="mt-4 inline-block text-blue-500">
          <FaArrowLeft className="inline mr-2" />
          Back to case studies
        </Link>
      </section>
    );
  }

  return (
    <WebsiteLayout footerData={info}>
    <section>
      <div className="pt-10 pb-0 ">               
        <div className="my-0  w-full ">         
          <div className="px-6 sm:px-12">
            <Link href="/our_work" className="pb-2 sm:pb-8 cursor-pointer"> <FaArrowLeft className="inline" />  <span className="px-4 text-sm">Back to case study</span>          
            </Link>    
            <h2 className="font-light text-2xl py-2 sm:py-4 mt-0 sm:mt-4"> Expandi | {monthAndYear(work.created_at as string)}</h2>
             <h1 className="font-bold text-3xl py-2 sm:py-4">{work.title}</h1> 
          </div> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 relative">
            <div className="text-left px-6 sm:px-12 order-2 sm:order-1">
              <p className="text-sm font-light text-justify pt-[10px] leading-loose"> {work.description} </p>
            </div>
                       
            <div className="absolute flex justify-end w-full  order-1 sm:order-2 mt-0 sm:-mt-60"> 
              <Image
                src={work.image ?? "/images/our_work/work1.webp"}
                alt="Case Study"
                width={100}
                height={100}
                className="object-cover rounded w-[550px] h-[450px]"
              />
    
            </div>       
          </div>
                   
          <div className="px-6 sm:px-12 pt-16 pb-6 sm:pb-2 ">
                       
            <div className="max-w-xl">
                     
              <h1 className="font-semibold text-2xl flex mb-4 sm:mb-8 font-lora ">
                 
                <FaQuoteLeft size={12} className="font-extralight" /> Challenges
                <FaQuoteRight size={12} className="font-extralight" />        
                  
              </h1>
                 
              <p className="text-sm font-extralight text-justify leading-loose">
                {work.challenges}{" "}
              </p>{" "}
                       
            </div>
               
          </div>
                   
          <div className="block sm:hidden">
            <div className=" px-4">
                     
              <Image
                src="/images/our_work/message.webp"
                alt="Message"
                width={1000}
                height={20}
                className="object-contain mx-auto w-[95%] "
              />
                     
              <div className=" py-6">
                <h1 className="font-semibold text-2xl flex font-lora ">
                  <FaQuoteLeft size={12} className="font-extralight" /> Our  
                  Strategy (Mobile)                  
                  <FaQuoteRight size={12} className="font-extralight" />        
                </h1>
                         
                <p className="text-sm font-light text-justify  p-4 leading-loose">
                  {work.strategy}
                </p>
                       
              </div>
                   
            </div>
                       
            <div className="px-4 sm:px-12 pb-4">
                     
              <h1 className="font-semibold text-2xl flex font-lora ">
                         
                <FaQuoteLeft size={12} className="font-extralight" /> Takeaway
                <FaQuoteRight size={12} className="font-extralight" />          
                   
              </h1>
                     
              <p className="text-sm font-light text-justify  p-4 leading-loose">
                {work.takeaway}{" "}
              </p>
                   
            </div>
                       
            <div className="w-full flex justify-end items-center">
                     
              <Link href="/our_work" className="pb-2 cursor-pointer">  <FaArrowLeft className="inline" />   <span className="px-4 text-sm ">Back to case studies</span>    
                   
              </Link>
                   
            </div>
                     
          </div>
                   
          <div className="hidden sm:block">
                       
            <WavyCard4>
                     
              <div className="pt-0 pb-2 lg:pb-20 ">
                <div className="relative min-h-[460px] lg:min-h-[630px] hidden sm:block ">
                             
                  <Image
                    src="/images/our_work/message.webp"
                    alt="Message"
                    width={1000}
                    height={20}
                    className="object-contain absolute top-[5%] w-[95%] "
                  />
                             
                  <div className="border border-primary rounded-2xl pt-[33%] pb-2 lg:pb-6 max-w-md float-right px-6">
                                 
                    <h1 className="font-semibold text-2xl flex font-lora justify-center ">
                      <FaQuoteLeft size={12} className="font-extralight" /> Our Strategy (Desktop) <FaQuoteRight size={12} className="font-extralight" />   
                    </h1>
                                 
                    <p className="text-sm font-light text-justify  p-4 leading-loose">
                      {work.strategy}
                    </p>
                               
                  </div>
                           
                </div>
                         
                <div className="px-0 sm:px-12 pb-8 lg:pb-6 mt-2 lg:mt-0">
                             
                  <h1 className="font-semibold text-2xl flex font-lora  "><FaQuoteLeft size={12} className="font-extralight" />
                     Takeaway <FaQuoteRight size={12} className="font-extralight" />   </h1>
                             
                  <p className="text-sm font-light text-justify  p-4 leading-loose">
                    {work.takeaway}
                  </p>
                           
                </div>
                         
                <div className="w-full flex justify-end items-center -mt-10 lg:mt-0">            
                  <Link  href="/our_work" className="pb-0 lg:pb-8 cursor-pointer" ><FaArrowLeft className="inline" /> <span className="px-4 text-sm ">Back to case studies</span> </Link>        
                </div>
                       
              </div>
                   
            </WavyCard4>
                     
          </div>
                 
        </div> 
      </div>
       <CaseStudy />
    </section>
    </WebsiteLayout>
  );
};

export default WorkDetail;
