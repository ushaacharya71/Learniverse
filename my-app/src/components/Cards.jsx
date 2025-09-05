// import { FaUsers, FaBell } from "react-icons/fa";

// const programs = [
//   {
//     id: 1,
//     title: "Cyberpunk 2077",
//     publisher: "CD Projekt Red",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Notify me",
//     buttonType: "secondary",
//   },
//   {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   },
//    {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   },


//    {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   }, {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   },
//    {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   },
//    {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   },
//    {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   },
//    {
//     id: 2,
//     title: "TheLearniverse Programs",
//     publisher: "Glowlogics",
//     Student: 865,
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
//     button: "Open",
//     buttonType: "primary",
//   },


// ];

// export default function programCarousel() {
//   return (
//     <div className="w-full overflow-x-auto">
//       <div className="flex gap-4 px-4">
//         {programs.map((program) => (
//           <div
//             key={program.id}
//             className="bg-[#111] rounded-2xl shadow-lg overflow-hidden min-w-[280px] max-w-[300px] flex-shrink-0"
//           >
//             <img
//               src={program.image}
//               alt={program.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-white">{program.title}</h3>
//               <p className="text-gray-400 text-sm">{program.publisher}</p>

//               <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
//                 <FaUsers className="text-pink-400" />
//                 <span>{program.Student} Student rated this program</span>
//               </div>

//               {program.buttonType === "secondary" ? (
//                 <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700">
//                   <FaBell /> {program.button}
//                 </button>
//               ) : (
//                 <button className="mt-4 w-full px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600">
//                   {program.button}
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { FaUsers, FaBell } from "react-icons/fa";

const programs = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    publisher: "CD Projekt Red",
    Student: 865,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60",
    button: "Notify me",
    buttonType: "secondary",
  },
  {
    id: 2,
    title: "TheLearniverse Programs",
    publisher: "Glowlogics",
    Student: 865,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&auto=format&fit=crop&q=60",
    button: "Open",
    buttonType: "primary",
  },
  {
    id: 3,
    title: "Advanced Web Dev",
    publisher: "Glowlogics",
    Student: 540,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=60",
    button: "Open",
    buttonType: "primary",
  },
  {
    id: 4,
    title: "UI/UX Essentials",
    publisher: "Glowlogics",
    Student: 420,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&auto=format&fit=crop&q=60",
    button: "Open",
    buttonType: "primary",
  },
];

export default function ProgramCarousel() {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 px-4 sm:px-6 md:px-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-[#111] rounded-2xl shadow-lg overflow-hidden min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] flex-shrink-0"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-36 sm:h-40 md:h-44 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {program.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {program.publisher}
              </p>

              <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm mt-2">
                <FaUsers className="text-pink-400" />
                <span>{program.Student} Student rated this program</span>
              </div>

              {program.buttonType === "secondary" ? (
                <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors text-sm sm:text-base">
                  <FaBell /> {program.button}
                </button>
              ) : (
                <button className="mt-4 w-full px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors text-sm sm:text-base">
                  {program.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
