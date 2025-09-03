import React from "react";

const trainings = [
  {
    title: "Camera Training",
    description:
      "Master professional photography with hands-on DSLR and mirrorless camera training. Learn lighting, angles, and composition techniques to capture cinematic shots.",
    media: "/tra6.jpg", // replace with your own image/video
    type: "image",
  },
  {
    title: "Drone Training",
    description:
      "Learn aerial cinematography with drones. Our certified trainers guide you in safe flying, advanced maneuvers, and breathtaking sky visuals.",
    media: "/drone.mp4", // example video
    type: "video",
  },
  {
    title: "On field training",
    description:
      "Our Field Training program is designed to provide hands-on, real-world experience outside the studio. Students get the opportunity to work directly in live environments such as wedding venues, events, outdoor shoots, and production sets.",
    media: "/onfeild.mp4",
    type: "video",
  },
  {
    title: "Graphic Design",
    description:
      "Master Photoshop, Illustrator, and Canva. Create eye-catching posters, social media graphics, and professional branding designs.",
    media: "/pra.jpg",
    type: "image",
  },
   {
    title: "Video Editing",
    description:
      "Master Photoshop, Illustrator, and Canva. Create eye-catching posters, social media graphics, and professional branding designs.",
    media: "/vie.jpg",
    type: "image",
  },
];

const TrainingSection = () => {
  return (
    <section className="bg-gray-50 py-16" id="training">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-sky-500">Training Programs</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Hands-on training from experts in media production. Learn the
            practical skills needed to excel in today’s creative industry.
          </p>
        </div>

        {/* Training Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {trainings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col md:flex-row"
            >
              {/* Media (image or video) */}
              <div className="md:w-1/2">
                {item.type === "video" ? (
                  <video
                    controls
                    className="h-64 w-full object-cover md:h-full"
                  >
                    <source src={item.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.media}
                    alt={item.title}
                    className="h-64 w-full object-cover md:h-full"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 rounded-lg font-medium transition self-start">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
