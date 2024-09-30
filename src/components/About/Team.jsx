import { Facebook, Twitter, Linkedin } from 'lucide-react'

const teamMembers = [
  { id: 1, name: 'Raised Bancho', image: '/AboutPic/team-1.webp', bgColor: 'bg-pink-200' },
  { id: 2, name: 'Mitchell', image: '/AboutPic/team-2.webp', bgColor: 'bg-gray-200' },
  { id: 3, name: 'Braidle Rosund', image: '/AboutPic/team-3.webp', bgColor: 'bg-pink-200' },
  { id: 4, name: 'Olivia Grace', image: '/AboutPic/team-4.webp', bgColor: 'bg-gray-200' },
  { id: 5, name: 'Mia Rose Carter', image: '/AboutPic/team-5.webp', bgColor: 'bg-gray-200' },
  { id: 6, name: 'Sophia Elizabeth', image: '/AboutPic/team-6.webp', bgColor: 'bg-yellow-100' },
  { id: 7, name: 'Isabella Marie', image: '/AboutPic/team-7.webp', bgColor: 'bg-yellow-100' },
  { id: 8, name: 'Jane Robinson', image: '/AboutPic/team-8.webp', bgColor: 'bg-yellow-100' },
]

export const Team = () => {
  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 my-20">
      <h2 className="text-center text-2xl font-semibold mb-2">Meet Our Team Members</h2>
      <h1 className="text-center text-4xl font-bold mb-12">Leadership & Experienced Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className={`relative rounded-lg overflow-hidden ${member.bgColor} group`}>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#c3957b] flex-col space-y-52 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
              <div className='text-white font-bold text-2xl'>
                {member.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Team