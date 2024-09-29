


export const SendMessage = () => {
  return (
   <div className="container mx-auto px-4 sm:px-10 lg:px-20 xl:px-28 my-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#ffc4a0] text-black font-medium px-6 py-4 rounded-lg hover:text-white transition-colors"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096385!2d144.96590661531702!3d-37.81686497975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1625761975544!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
export default SendMessage