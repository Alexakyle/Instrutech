const GetInTouch = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full flex-1 basis-[18rem]">
          <img
            src="/images/home/conta.gif" 
            alt="Valentine's Date Experience"
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 basis-[18rem] bg-secondary py-6 text-slate-800">
          <div className="max-w-[350px] w-full mx-auto bg-pink-200 p-5 rounded-lg shadow-lg">
            <h1 className="text-xl font-semibold text-center text-primary">Get in Touch</h1>
            <p className="text-center">
              Want to book a date or have questions? Fill out the form below, and we’ll reach out soon!
            </p>
            <div className="mt-4">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-white"
                placeholder="Your name.."
              />
              <input
                type="email"
                className="w-full px-3 py-2 mt-3 border border-gray-300 rounded-md outline-none bg-white"
                placeholder="Your email.."
              />
              <textarea
                className="w-full p-3 mt-3 border border-gray-300 rounded-md outline-none bg-white"
                rows={3}
                placeholder="Tell us your preferred date and details.."
              ></textarea>
              <button className="w-full mt-4 btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
