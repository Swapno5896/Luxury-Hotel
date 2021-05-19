import React from 'react';
import rooms from '../../Images-roni/room.PNG'
import res from '../../Images-roni/restru.PNG'
import spacious from '../../Images-roni/SPA.PNG'
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css'

const bestServices = [
   {
      img: rooms,
      name: "ROOMS & APARTMENTS",
      description: "Abundantly tree made. Days saw thing whales may, creeping after abundantly waters, fourth so were, gathered above cattle lights waters.",
   },
   {
      img: res,
      name: "RESTAURANT",
      description: "Divide yielding. Lesser man said shall So. And. Void under lights rule evening were also replenish firmament fish. Night upon.",
   },
   {
      img: spacious,
      name: "SPA & FITNESS",
      description: "Fourth, give yielding. Signs, made. Herb. Behold make sixth two deep fly which without darkness beginning they’re winged days. Whose.",
   },
]

const Services = () => {
   return (
      <div className="container">
         <h1 className="text-center services-for mt-5 pb-5 pt-5">Best Service for you</h1>
         <div className="pb-5 mt-5">
            {
               bestServices.map((bestService) => <ServicesCard service={bestService}></ServicesCard>)
            }
         </div>
      </div>
   );
};

export default Services;