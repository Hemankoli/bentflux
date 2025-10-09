export default function CloudServices() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 lg:px-10 ">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">
            Leverage our expertise around the major cloud service providers
          </h1>
          <p className="text-md font-bold max-w-2xl mx-auto text-gray-500">
            We have deep experience working with the leading cloud platforms to help you build, deploy, and scale your applications.
          </p>
        </div>

        {/* Cloud Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card */}
          <div className="bg-transperent text-white rounded-md border-2 border-gray-600 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Amazon Web Services</h3>
              </div>
              <p className="mb-4">
                Comprehensive cloud services including compute, storage, and databases with global reach.
              </p>
            </div>
          </div>

          {/* Google Cloud Card */}
          <div className="bg-transperent text-white rounded-md border-2 border-gray-600 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Google Cloud Platform</h3>
              </div>
              <p className="mb-4">
                Infrastructure, data analytics, and machine learning services powered by Google's technology.
              </p>
            </div>
          </div>

          {/* Azure Card */}
          <div className="bg-transperent text-white rounded-md border-2 border-gray-600 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Microsoft Azure</h3>
              </div>
              <p className="mb-4">
                Enterprise-grade cloud computing with integrated tools and services for business applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}