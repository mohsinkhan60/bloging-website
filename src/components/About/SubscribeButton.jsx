

export const SubscribeButton = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted')
  }

  return (
   <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Subscribe For</h2>
          <h2 className="text-3xl font-bold text-gray-800">Newsletter</h2>
          <div className="hidden md:block mt-4">
            <img src="/AboutPic/Sub1.webp" alt="" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 px-4 py-2 mb-4 md:mb-0 md:mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-orange-300 text-white font-semibold rounded-md hover:bg-orange-400 transition duration-300 ease-in-out"
            >
              Subscribe Now
            </button>
          </div>
        </form>
        <div className="hidden md:block ml-8">
          <img src="/AboutPic/Sub2.webp" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}
export default SubscribeButton