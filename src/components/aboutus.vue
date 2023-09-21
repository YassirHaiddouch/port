<template>
    <section class=" w-full min-h-screen bg-orange-50 flex justify-center text-nav px-5 ">
  <div class="max-w-screen-xl py-5">
    <div class="hero my-5">
  <div class="hero-content flex-col lg:flex-row">
    <div class="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <img src="https://picsum.photos/200" alt="">
      </div>
    </div>
    <div class="text-center lg:text-left bg-orange-400 p-4 rounded-lg">
      <h1 class="text-5xl font-bold text-base-100">Yassir HAIDDOUCH</h1>
      <p class="mt-0 mb-0 ml-2 text-sm text-orange-50">{{ age }} year, Guelmim</p>
      <p class="pb-6 pt-2 text-base-100">I am a seasoned software developer with a strong passion for technology and a track record 
        of building diverse digital solutions, from basic landing pages to sophisticated enterprise websites. My expertise spans full-stack 
        development, software architecture, and consulting, with a primary focus on Node.js and React.js. I specialize in crafting responsive
         layouts using modern technologies like HTML5, CSS3, and JavaScript, always prioritizing scalability and algorithmic efficiency. Fluent 
         in both English and French, I maintain open communication channels and provide
         regular updates to ensure project success.</p>
    </div>
    
  </div>
</div>
    <div class="max-w-full px-5">
      <h2 class="text-3xl font-bold text-orange-400 sm:text-4xl select-none">What makes us special</h2>

      <p class="mt-4 text-nav select-none">
        We excited to collaborate with you on your next project! With a proven track record of 
        building outstanding products, features, and websites, We confident that I can bring your 
        vision to life. Take a look at some of my previous work and experience to get a sense of my 
        capabilities. If you have a project in mind that needs expert coding,
         please don't hesitate to reach out. Let's turn your ideas into reality together
      </p>
    </div>

    <div class=" my-8 grid px-5 grid-cols-1 gap-8  md:grid-cols-2 md:gap-12 lg:grid-cols-3">
         
                <button class="btn gap-4 rounded-lg bg-orange-300 p-4 text-nav hover:bg-orange-400" onclick="my_modal_1.showModal()">Languages</button>
              <dialog id="my_modal_1" class="modal pt-0">
                <div class="modal-box bg-orange-100 pt-0">
                  
                    <div class="sticky top-0  bg-orange-300">
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  hover:bg-orange-200 hover:scale-110">✕</button>
                  </form>
                  <h3 class="font-bold text-lg">Languages</h3> 
                    </div>
                    

                  <p class="py-4">Coding languages are specialized tools used to communicate instructions to computers, enabling them to perform various tasks and processes.</p>
                  <details class="group [&_summary::-webkit-details-marker]:hidden gap-4">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  bg-orange-300 p-4 text-nav"
                  >
                    <h2 class="font-medium">
                      Web
                    </h2>
              
                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
              
                  <p class="mt-4 px-4 leading-relaxed text-nav select-none">
                    A coding framework is a pre-established structure or set of tools that simplifies and standardizes software development, streamlining the process of building applications by providing reusable components, patterns, and guidelines.
                  </p>
                </details>
                <details class="group [&_summary::-webkit-details-marker]:hidden gap-4 mt-3">
            <summary
              class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  bg-orange-300 p-4 text-nav"
            >
              <h2 class="font-medium">
                desktop
              </h2>
        
              <svg
                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
        
            <p class="mt-4 my-8 grid py-3 px-5 grid-cols-3 gap-8  md:grid-cols-4 md:gap-12 lg:grid-cols-4">
              <label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                <div class="swap-off flex justify-center items-center"><i class="fa-brands fa-html5 " style="color: #fb923c;"></i></div>
                <div class="swap-on flex justify-center items-center text-3xl">HTML</div>
              </label>
              <label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                <div class="swap-off flex justify-center items-center"><i class="fa-brands fa-js" style="color: #fb923c;" ></i></div>
                <div class="swap-on flex justify-center items-center text-4xl">JavaScript</div>
              </label> 
              <label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                <div class="swap-off flex justify-center items-center"><i class="fa-brands fa-html5 " style="color: #;"></i></div>
                <div class="swap-on flex justify-center items-center text-4xl">HTML</div>
              </label>
              <label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                
                <div class="swap-on">😈</div>
                <div class="swap-off">😂</div>
              </label><label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                
                <div class="swap-on">😈</div>
                <div class="swap-off">😇</div>
              </label>
              <label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                
                <div class="swap-on">😈</div>
                <div class="swap-off">😇</div>
              </label>
              <label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                
                <div class="swap-on">😈</div>
                <div class="swap-off">😇</div>
              </label>
              <label class="swap swap-flip text-7xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                
                <div class="swap-on">😈</div>
                <div class="swap-off">😇</div>
              </label>
               
            </p>
          </details>    
                </div>
                
              </dialog>

               
                
              <button class="btn gap-4 rounded-lg bg-orange-300 p-4 text-nav hover:bg-orange-400" onclick="my_modal_2.showModal()">Frameworks</button>
              <dialog id="my_modal_2" class="modal">
                <div class="modal-box bg-orange-100">
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  hover:bg-orange-200 hover:scale-110">✕</button>
                  </form>
                  <h3 class="font-bold text-lg">Frameworks</h3>
                  <p class="py-4">A coding framework is a pre-established structure or set of tools that simplifies and standardizes software development, streamlining the process of building applications by providing reusable components, patterns, and guidelines.
</p>
                </div>
              </dialog>


              <button class="btn gap-4 rounded-lg bg-orange-300 p-4 text-nav hover:bg-orange-400" onclick="my_modal_3.showModal()">Skills</button>
              <dialog id="my_modal_3" class="modal">
                <div class="modal-box bg-orange-100">
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-orange-200 hover:scale-110">✕</button>
                  </form>
                  <h3 class="font-bold text-lg">Skills</h3>
                  <p class="py-4">My skill set includes proficiency in web development, data analysis, and work in teams...</p>
                </div>
              </dialog>

                

          


        </div>
  </div>
</section>
  </template>
  
  <script>
  export default {
  data() {
    const birthdate = new Date('2000-07-04'); // Replace with your actual birthdate

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age1 = currentDate.getFullYear() - birthdate.getFullYear();

    // Check if the birthday for this year has occurred or not
    if (currentDate.getMonth() < birthdate.getMonth() || 
        (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
      age1--; // If not yet reached, subtract 1 from the age
    }
    return {
      age: age1
    };
  }
};
  </script>