function About() {
  return (
    <>
      <div className="p-4">
        <h1 className=" font-bold text-3xl pb-5">About</h1>
        {/* <h3 className="font-semibold text-xl">Description -: </h3> */}
        <p className="text-gray-700 text-lg pb-4">
          The Travel Destination Explorer is a React-based frontend application
          that allows users to explore a curated list of travel destinations
          across the globe. Users can view basic information like destination
          names, images, and short descriptions on the homepage, and click on
          "View Details" to see a detailed page with extended content and a
          large image for each destination.
        </p>
        <h3 className="text-xl font-semibold pb-4">Learning Outcome:</h3>
        <ul className="text-gray-700 pb-2">
          <li>
            ● Understood and implemented React Router DOM for multi-page
            navigation
          </li>
          <li>
            ● Gained hands-on experience with React components, props, and
            dynamic rendering
          </li>
          <li>
            ● Improved knowledge of JSX, conditional rendering, and functional
            components
          </li>
          <li>
            ● Learned to handle static assets via external image URLs and data
            files
          </li>
          <li>
            ● Strengthened understanding of project folder structure and
            state-free UI development
          </li>
          <li>
            ● Practiced using Tailwind CSS for responsive, modern, and styled
            UIs
          </li>
        </ul>
        <h3 className="text-xl font-semibold pb-4">Key Features:</h3>
        <ul className="text-gray-700 pb-2">
          <li>● Built entirely with React and Tailwind CSS (no backend)</li>
          <li>
            ● Implemented React Router for page navigation between Home, About,
            Destinations, and detailed destination views
          </li>
          <li>
            ● Structured and used React components effectively for better
            modularity and reusability
          </li>
          <li>● Used props and useParams for dynamic content rendering</li>
          <li>● Practiced clean file organization and code separation</li>
          <li>
            ● Practiced using Tailwind CSS for responsive, modern, and styled
            UIs
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
