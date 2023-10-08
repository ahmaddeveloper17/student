
"use client"
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';

const CourseDropdown = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSelectChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleAddCourse = async () => {
    try {
      const docRef = await addDoc(collection(db, 'courses'), {
        courseName: selectedCourse,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <h2>Select a Course:</h2>
      <select
        value={selectedCourse}
        onChange={handleSelectChange}
        style={{ width: '800px', height: '40px', fontSize: '30px' }}
      >
        <option value="">Select a course</option>
        <option value="Web and Mobile Application">
          Web and Mobile Application
        </option>
        <option value="AI & Chatbot">AI & Chatbot</option>
        <option value="Graphic desining">Graphic desining</option>
        <option value="Video Animation">Video Animation</option>
        <option value="3d Animation">3d Animation</option>
        <option value="CCNA">CCNA</option>
        {/* Add more course options as needed */}
      </select>
      <button
        style={{ marginBottom: '15px' }}
        type="button"
        className="btn btn-outline-info"
        onClick={handleAddCourse}
      >
        Submit
      </button>
      {selectedCourse && <p>You selected: {selectedCourse}</p>}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Course Selection Page</h1>
      <CourseDropdown />
    </div>
  );
};

export default Home;
