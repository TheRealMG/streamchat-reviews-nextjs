"use client"

import React, {useState} from "react";
import Select from "react-select";

const options = [
  {value: "rating", label: "Rating"},
  {value: "date", label: "Date Added"},
  {value: "name", label: "Name"},
  {value: "release", label: "Release Date"},
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5rem',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    border: 'none',
    marginBottom: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    marginLeft: '0.5rem',
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.16)', // Set the background color of the dropdown menu to black
    borderRadius: '0.375rem', // Add rounded corners to the dropdown menu
    marginTpo: 0,
    boxShaDOW: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'white', // Set the text color of the options to white
    backgroundColor: state.isSelected ? 'gray' : 'none', // Set the background color of selected option to gray and others to black
  }),
};

const Sidebar = () => {
  const [genresOpen, setGenresOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);

  const toggleGenres = () => {
    setGenresOpen(prevGenresOpen => !prevGenresOpen);
  };

  const togglePlatforms = () => {
    setPlatformsOpen(prevPlatformsOpen => !prevPlatformsOpen);
  };

  return (
    // <div className="sidebar min-w-fit text-2xl top-0 sticky pt-6">
    //   <div className="mb-4">
    //     <label htmlFor="orderBy" className="text-white font-semibold">
    //       Order By
    //     </label>
    //     <select id="orderBy" className="w-full">
    //       <option value="rating">Rating</option>
    //       <option value="date">Date Added</option>
    //       <option value="name">Name</option>
    //       <option value="release">Release Date</option>
    //     </select>
    //   </div>

    //   <div className="mb-4">
    //     <div className="flex items-center justify-between">
    //       <h2 className="text-white font-semibold">Genres</h2>
    //       <button className="text-white">Toggle</button>{" "}
    //       {/* Button for toggling the section */}
    //     </div>
    //     <ul className="list-disc list-inside text-lg">
    //       <li>Action</li>
    //       <li>Adventure</li>
    //       <li>Role-playing</li>
    //       {/* Add more genres */}
    //     </ul>
    //   </div>

    //   <div className="mb-4">
    //     <div className="flex items-center justify-between">
    //       <h2 className="text-white font-semibold">Platforms</h2>
    //       <button className="text-white">Toggle</button>{" "}
    //       {/* Button for toggling the section */}
    //     </div>
    //     <ul className="list-disc list-inside text-lg">
    //       <li>PlayStation</li>
    //       <li>Xbox</li>
    //       <li>Nintendo</li>
    //       <li>Steam</li>
    //       {/* Add more platforms */}
    //     </ul>
    //   </div>
    // </div>


    <div className="sidebar min-w-fit text-2xl top-0 sticky pt-6">
      <div className="mb-4">
        <label htmlFor="orderBy" className="text-white font-semibold">
          Order By:
        </label>
        <select id="orderBy" className="w-full">
          <option value="rating">Rating</option>
          <option value="date">Date Added</option>
          <option value="name">Name</option>
          <option value="release">Release Date</option>
        </select>
      </div>

      <div className="mb-4">
        <Select options={options} placeholder="Order By" formatOptionLabel={({label}) => (
          <div>
            <span>Order By:</span>
            <span className="ml-2">{label}</span>
          </div>
        )} 
        styles={customStyles}
        />
      </div>

      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleGenres}
        >
          <h2 className="text-white font-semibold">Genres</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              genresOpen ? "transform rotate-180" : ""
            } transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {genresOpen && (
          <ul className="list-disc list-inside text-lg">
            <li>Action</li>
            <li>Adventure</li>
            <li>Role-playing</li>
            {/* Add more genres */}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={togglePlatforms}
        >
          <h2 className="text-white font-semibold">Platforms</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              platformsOpen ? "transform rotate-180" : ""
            } transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {platformsOpen && (
          <ul className="list-disc list-inside text-lg">
            <li>PlayStation</li>
            <li>Xbox</li>
            <li>Nintendo</li>
            <li>Steam</li>
            {/* Add more platforms */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

// Revise in future, I think rating slider is unnecessary, and genres and platforms should be checkboxes instead of a list, and the list should be collapsible.
// Can add an "Order By" dropdown menu with options "Rating", "Date Added", "Name", "Release Date" instead of the rating slider.
