import Damac from '../../assets/images/Damac.png'
import img1 from '../../assets/images/img1.jpg'
import Book from '../../assets/images/book.png'
import Main2 from '../../assets/images/main2.jpg'
import A1 from '../../assets/images/a1.jpg'
import A2 from '../../assets/images/a2.jpg'
import I1 from '../../assets/images/i1.jpg'
import I2 from '../../assets/images/i2.jpg'
import I3 from '../../assets/images/i3.jpg'
import I4 from '../../assets/images/i4.jpg'
import Carousal from '../Carousal/Carousal'
import Taps from '../Taps/Taps'
import Properties from '../Properties/Properties'
import UserForm from '../UserForm/UserForm'

function Hero() {
  return (
    <>
     <div className="overflow-hidden w-full">
        
            <div className='bg-form2'>
            <div className="mx-auto pt-8 pl-12 overflow-hidden " >
            <p>
            <a className="text-cyan-500">Main Page </a> › <a className="text-cyan-500"> Projects </a> › Riverside from DAMAC Properties
            </p>
        
            </div>
            <div className=" flex flex-row ">
                <div className="basis-1/2 lg:pl-[200px] pt-24">
                    <img src={Damac} alt="Damac" width={250} />
                    <h2 className='text-[45px] leading-tight pt-20 text-gray-700'>
                        <strong>Townhouses</strong><br></br>
                        <strong>In the Riverside complex</strong><br></br>
                        <strong>In Dubai Investments Park</strong>
                    </h2>
                    <button type="button" className="mt-20 text-xl px-20 py-6 text-sm font-bold text-white inline-flex items-center bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-center">
                    Discover More
                    </button>

                    <div className='pt-16 grid grid-cols-1 md:grid-cols-3'>
                        <div className=" flex flex-row pt-4">
                        <img alt="" src="https://i.1.creatium.io/33/28/48/8c75eaf294278cca8238842fce8f4892ab/45x40/icn1_1.svg" width={50} className=""/>
                        <div className="flex flex-col pl-4">
                            <div className='text-lg'><strong>AED 1,9M </strong></div>
                            <div className='text-gray-500 text-[12px]'>STARTING PRICE</div>
                            </div>
                        </div>

                        <div className=" flex flex-row pt-4">
                        <img alt="" src="https://i.1.creatium.io/a9/f0/b6/380f4ac7c436ce071045e0d42d97eb303a/43x40/icn1_2.svg" width={50} className=""/>
                        <div className="flex flex-col pl-4">
                            <div className='text-lg'><strong>Easy 70/30</strong></div>
                            <div className='text-gray-500 text-[12px]'>PAYMENT PLAN</div>
                            </div>
                        </div>

                        <div className=" flex flex-row pt-4">
                        <img alt="" src="https://i.1.creatium.io/a9/f0/b6/380f4ac7c436ce071045e0d42d97eb303a/43x40/icn1_2.svg" width={50} className=""/>
                        <div className="flex flex-col pl-4">
                            <div className='text-lg'><strong>Update soon</strong></div>
                            <div className='text-gray-500 text-[12px]'>HANDOVER</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-1/2 pt-20'>
                    <img src={img1} className='rounded-s-[140px] overflow-hidden ' alt="" />
                </div>
            </div>

            
            <div className='pt-32'>
            <hr className='ml-52 border-[1px] text-gray-800'></hr>
            </div>

            <div className='flex flex-row pt-10'>
                <div className='basis-2/5 md:pl-[200px] mx-auto'>
                    <p className='text-lg'>DAMAC Properties is bringing a large townhouse community to Dubai Investments Park. Called Riverside, it features a collection of 4-5 bedroom townhouses inspired by Rome, Paris, London, Amsterdam and New York.</p>
                    <button type="button" className="mt-20 text-xl px-16 py-6 text-sm font-bold text-white inline-flex items-center bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-center">
                    Download Free PDF Brochure  →
                    </button>
                </div>

                <div className='basis-3/5'>
                <img src={Book} className='-rotate-[25deg] overflow-hidden pl-32 w-max' alt="" />
                </div>
            </div>
            </div>
            <div className='flex flex-row relative '>
                <img src={Main2} className='' alt="" />
            </div>

            <div className=' pt-16 flex gap-8 flex-row items-center justify-center'>
                <div className='text-4xl'>
                <strong><h2> Riverside by DAMAC Properties </h2></strong>
                </div>
                
                <div className=''>
                    <button type="button" className=" text-xl px-8 py-4 text-sm font-bold text-white inline-flex items-center bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-center">
                    Request Available Units & Prices →
                    </button>
                </div>               
            </div>

            <div className=' pt-16 flex gap-8 flex-row items-center justify-center'>
                <div className='text-lg md:px-64'>
               <p>Situated in Dubai Investments Park, Riverside is a large-scale residential community by DAMAC Properties. As of May 2024, there are a total of 1,900 townhouses with 4-5 bedrooms available for purchase. The architectural design of the residences is inspired by the world’s top cities, and include Rome, Paris, London, New York and Amsterdam.

                <br></br>The area of the units ranges from 2,297 sq. ft to 3,407 sq. ft over two or three storeys. The layouts include a storage area, laundry room, garage and balconies. Additionally, 5-bedroom units feature a terrace and maid’s room.

                <br></br>Riverside boasts outstanding infrastructure, with a variety of recreational amenities spanning across two zones: Water Vein and Green Vein. The Water Vein is designed with leisure and water sport in mind. Here you will find aquatic fitness areas, splash climbing, essential oil lakes, a floating opera and cinema, along with two restaurants – Portofino Ristorante and Island Restaurant. You can even propose to your loved one on the beautiful floating proposal deck for a truly romantic experience.

                <br></br>At the same time, the Green Vein offers unique opportunities for sport and leisure along with functional spaces for work and personal development. Residents will enjoy such offerings as culinary classes, hydroponic farms, a zen spa, BBQ & live cooking stations, a callisthenics zone, peace and meditation rooms, an amphitheatre and a children’s adventure land. There are also many amenities available in the clubhouse with its gym, co-working space, bowling alley, arcade and outdoor cinema.</p>
                
                <div className=' pt-16 flex gap-8 flex-row items-start align-top justify-start'>
                    <div>
                        <img src={A1} className='rounded-xl'  width={600} alt="" />
                    </div>
                    <div className='row-end-3'>
                        <img src={A2} className='rounded-xl' alt="" />
                    </div>
                </div>
                
                </div>          
            </div>

            <div className=' pt-16 px-4 md:px-64 grid-cols-1 grid gap-4 md:grid-cols-3 items-center justify-center'>
                <div className='col-span-1'>
                    <h2 className='text-5xl'>
                    About Location
                    </h2>
                    <p className='pb-10 text-4xl text-cyan-500'>Dubai Investments Park in Dubai</p>
                    <hr className=" zig"></hr>
                    <hr className="zag"></hr>
                </div>

                <div className='col-span-2 flex gap-4 flex-row '>
                    <div className='w-36'> 
                     <img src={I1} className='rounded-xl object-cover h-full' width={400}  alt="" /> 
                    </div>
                    <div className='w-52'> 
                     <img src={I2} className='rounded-xl object-cover h-full' width={400}  alt="" /> 
                    </div>
                    <div className='w-36'> 
                     <img src={I3} className='rounded-xl object-cover h-full' width={400}  alt="" /> 
                    </div>
                    <div className='w-52 h-48'> 
                     <img src={I4} className='rounded-xl object-cover h-full' width={200}  alt="" /> 
                    </div>
                    
                </div>
            </div>

            <div className=' pt-16 flex gap-8 flex-row items-center justify-center'>
                <div className='text-lg px-4 md:px-64'>
                    <p>
                    Riverside is located near the junction of Sheikh Zayed Bin Hamdan Al Nahyan St and Yalais St/Jebel Ali-Al Hibab Rd, which make commuting around the city easy. For instance, the trip to Al Maktoum International Airport and Palm Jumeirah takes under 30 minutes.

                    <br></br><br></br>Within walking distance of Riverside are Al Maya Supermarket, Aster Pharmacy 2 DIP and Fida Al Madina Hypermarket. Also nearby is Nibras International School Dubai, which offers American Curriculum for students from Kindergarten to Grade 12.

                    <br></br><br></br> Families with children will particularly be interested in living here, as it will take only 10 minutes by car to reach prestigious academic and healthcare facilities. Among them are Greenfield International School, The International School of Choueifat – Dubai Investments Park and NMC Royal Hospital DIP.

                    <br></br><br></br> This community is also a great option for those who want to live close to their workplace in Expo City Dubai. Riverside is nestled about a 15-minute drive away from Expo City Dubai, which houses offices of local and global businesses, along with organisations and educational institutions such as Siemens Energy, Emirates Airlines, Fingulf, Terminus Group and more.

                    <br></br><br></br>If you wish to rent your property out, you can get a glimpse of the investment potential of real estate in Riverside by taking a look at the indicators of neighbouring Al Furjan. As of May 2024, a 4-bedroom townhouse generates an ROI of 4.9%, with annual rents starting from AED 170K (USD 46K). Therefore, you can expect to generate passive rental income which will increase alongside the development of the community.

                    <br></br><br></br>When investing in Riverside, you will be able to apply for a 2-year residency visa. If the purchase sum is AED 2M (USD 545K) or more, you become eligible for a coveted 10-year Golden Visa. Both of these residencies cover your family, whilst the Golden visa also provides sponsorship of domestic staff.
                    </p>
                </div>
            </div>

            <div className='pt-16 px-4 md:px-64 flex gap-8 flex-row items-center '>
                <div>
                    <h2 className='basis-1/4 text-5xl '> Photo Galary </h2>
                </div>

                <div className='basis-1/2'>
                <hr className=" zig"></hr>
                <hr className="zag"></hr>
                </div>
                <div>
                    <h3 className='text-2xl py-2 px-12 bg-cyan-500 text-white rounded-md'> Exterior</h3>
                </div>                
            </div>

            <Carousal></Carousal>

            <Taps></Taps>

            <Properties></Properties>

            <UserForm></UserForm>





        </div>
        </>
  )
}

export default Hero