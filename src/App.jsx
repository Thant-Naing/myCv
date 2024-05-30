import React from 'react'

const App = () => {
  return (
    <div className=' w-[800px] min-w-[400px] mx-auto  '>


   <div className=' flex gap-20 '>
    <div>
    <div className=' bg-indigo-700 w-[120px] h-[100px]'></div>
    <div className=' rounded-full border-white ml-6 -mt-20'>
       <img className=' border-4 m-6 border-white w-36 h-36 rounded-full' src='../assets-main/images/poe-mamhe-thar-3.jpeg'/>
       </div>
    </div>
    
    <div className=' mt-10'>
      <h1 className=' text-indigo-800 text-4xl font-mono font-extrabold mb-2'>Thant Naing</h1>
      <p className=' text-xl text-center'>Product Designer</p>
    </div>

    <img className=' w-32 h-32' src='../assets-main/images/drawing-svgrepo-com.svg'/>

  

   </div>






    <div className=' flex '>



<div className=' basis-1/3 p-5 -mt-8'>
  
  <div className=''>
     <h1 className=' text-xl text-center font-serif mb-2 '>About Me</h1>
     <p>A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills.</p>
      
      <div className=' mt-4 space-y-2'>
        <p> <span className=' font-bold'>Phone </span> +959799555739 </p>
        <p> <span className=' font-bold'>Email</span> lester6586@gmail.com </p>
        <p> <span className=' font-bold'>DOB</span> 20.11.1997 </p>
        <p> <span className=' font-bold'>Address</span> No.155, Poppa Street , DawPon ,Yangon </p>
      </div>
  </div>

  <div className=' mt-4'>
     <h3 className=' text-center text-lg text-white bg-indigo-700'>LANGUAGES</h3>
     <div className='p-4'>
     <li>Myanmar</li>
     <li>English</li>
     </div>
    
  </div>

  <div className=' mt-4'>
     <h3 className=' text-center text-lg text-white bg-indigo-700'>EXPERTISE</h3>
     <div className='p-4'>
     <li>Management Skill</li>
     <li>Creativity</li>
     <li>Digital Marketing</li>
     <li>Negotiation</li>
     <li>Critical Thinking</li>

     </div>
    
  </div>
   
   </div>


    <div className=' basis-2/3 -mt-3 pr-3'>
      
      <div className=' mb-2'>
        <h1 className=' text-lg text-center bg-indigo-700 text-white  w-[450px] mb-2'> WORK EXPERIENCE</h1>
        <p className=' font-bold mb-1'> A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy </p>
        <p>A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills. Some examples of general skills are time management, teamwork and leadership, and self-motivation. </p>

        
      </div>

      <div>
      <p className=' font-bold mb-1'> A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy </p>
        <p>A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills. Some examples of general skills are time management, teamwork and leadership, and self-motivation. </p>
      </div>

      <div>
      <p className=' font-bold mt-2 mb-1'> A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy </p>
        <p>A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills. Some examples of general skills are time management, teamwork and leadership, and self-motivation. </p>
      </div>

      <div className=' mb-2 mt-5'>
        <h1 className=' text-lg text-center bg-indigo-700 text-white  w-[450px] mb-2'> EDUCATION</h1>

         <div>
          <p className=' font-bold'>Dagon University</p>
          <p> Masters in Business Managements</p>  <p>2022</p>
         
         </div>

         <div className=' mt-2'>
          
          <p> Masters in Business Managements</p>  <p>2022</p>
         
         </div>
       
       

        
      </div>
      
      </div>


      


    </div>

    <div className=' font-bold text-center p-5 '>I hereby certify that all statements provided above are true and accurate</div>
   
    

    </div>
  )
}

export default App