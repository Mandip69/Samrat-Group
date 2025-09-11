import React from "react";

const trainings = [
  {
    title: "Camera Training",
    description:
      "Master professional photography with hands-on DSLR and mirrorless camera training. Learn lighting, angles, and composition techniques to capture cinematic shots.",
    media: "/tra6.jpg",
    type: "image",
  },
  {
    title: "Drone Training",
    description:
      "Learn aerial cinematography with drones. Our certified trainers guide you in safe flying, advanced maneuvers, and breathtaking sky visuals.",
    media: "/drone.mp4",
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
      "Learn video storytelling, editing, transitions, and color grading using industry-standard tools like Premiere Pro & Final Cut.",
    media: "/vie.jpg",
    type: "image",
  },
];

const Training = () => {
  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf1iy9bvqNubA8aSEoRDEbzE_8I91KXlnqnZf_TodUhmfUUmg/viewform?usp=sharing&ouid=100782127818539968867";

  const handleEnrollClick = (course) => {
    // Open Google Form in new tab
    window.open(googleFormLink, "_blank");
  };

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
              {/* Media */}
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
                <button
                  onClick={() => handleEnrollClick(item.title)}
                  className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 rounded-lg font-medium transition self-start"
                >
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

export default Training;
