/* eslint-disable react/prop-types */

import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { Phone, Mail, MapPin, Facebook, Twitter } from 'lucide-react'

const ContactCard = ({ phone, email, address }) => (

  <div className="bg-white rounded-2xl border hover:border-[#ffc4a0] p-6 m-4">
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="bg-gray-100 p-2 rounded-full">
          <Phone className="w-5 h-5 text-gray-600" />
        </div>
        <span className="text-gray-700">{phone}</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="bg-gray-100 p-2 rounded-full">
          <Mail className="w-5 h-5 text-gray-600" />
        </div>
        <span className="text-gray-700">{email}</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="bg-gray-100 p-2 rounded-full">
          <MapPin className="w-5 h-5 text-gray-600" />
        </div>
        <span className="text-gray-700">{address}</span>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Connect With Us:</h3>
      <div className="flex space-x-3">
        <a href="#" className="bg-gray-100 p-2 rounded-lg hover:bg-[#ffc4a0]  text-gray-600 hover:text-white transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="bg-gray-100 p-2 rounded-lg hover:bg-[#ffc4a0] text-gray-600 hover:text-white transition-colors">
          <FaSkype className="w-5 h-5 " />
        </a>
        <a href="#" className="bg-gray-100 p-2 rounded-lg hover:bg-[#ffc4a0] text-gray-600 hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="bg-gray-100 p-2 rounded-lg hover:bg-[#ffc4a0] text-gray-600 hover:text-white transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
)

export const Header = () => {
  const contactInfo = [
    {
      phone: "(00) 111 222 1111",
      email: "infoofbunzon@gmial.com",
      address: "845 Central Ave Hamilton, Ohio(OH), 45011"
    },
    {
      phone: "(00) 111 222 2222",
      email: "infoofbunzon@gmial.com",
      address: "845 Central Ave Hamilton, Ohio(OH), 45011"
    },
    {
      phone: "(00) 111 222 3333",
      email: "infoofbunzon@gmial.com",
      address: "845 Central Ave Hamilton, Ohio(OH), 45011"
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-20 my-20">
      <div className="flex flex-wrap -mx-4 justify-center">
        {contactInfo.map((info, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContactCard {...info} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Header