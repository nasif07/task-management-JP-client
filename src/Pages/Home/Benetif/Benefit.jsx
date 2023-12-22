
const Benefit = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-2">
        <div className="container mx-auto text-center">
          <h2 className="md:text-4xl text-2xl font-bold mb-6">Who Benefits from Our Website?</h2>
          <p className="text-lg mb-8">
            Our platform caters to a diverse audience, offering valuable resources and tools tailored to various professions and interests. Whether you're a seasoned professional or a newcomer in your field, our website is designed to provide meaningful benefits to individuals from different backgrounds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Developers</h3>
              <p>Access the latest coding and follow the routine</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Corporate Professionals</h3>
              <p>Stay updated on industry trends and best practices.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Bankers</h3>
              <p>Explore financial insights and market trends.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Benefit;