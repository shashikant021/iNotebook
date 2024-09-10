import React from 'react'; 

const About = () => {
    return (
        <div className="about-container">
            <h1>About iNotebook</h1>
            <p>
                Welcome to iNotebook, your personal digital notebook application. With iNotebook, you can easily organize your thoughts, manage tasks, and keep track of your ideas in one central location. Whether you're a student, professional, or just someone who likes to stay organized, iNotebook has something to offer for everyone.
            </p>
            <p>
                Our mission is to provide a seamless and intuitive experience that makes note-taking and idea management effortless. We believe that the right tools can enhance productivity and creativity, and iNotebook is designed with that principle in mind.
            </p>
            <img src="./logo.png" alt="Notebook illustration" className="about-image" />
            <h2>Features of iNotebook</h2>
            <ul>
                <li>Effortless note-taking with a clean and simple interface.</li>
                <li>Organize your notes into different notebooks and tags.</li>
                <li>Secure your notes with encryption and backup options.</li>
                <li>Access your notes from any device, anywhere.</li>
                <li>Share your notes with friends, colleagues, or team members.</li>
            </ul>
            <h2>Notebook Ideas</h2>
            <p>
                Here are some creative notebook ideas to help you get started:
            </p>
            <ul>
                <li><strong>Travel Journal:</strong> Document your adventures, memories, and travel plans.</li>
                <li><strong>Recipe Book:</strong> Store your favorite recipes, cooking tips, and meal plans.</li>
                <li><strong>Project Planner:</strong> Keep track of your projects, deadlines, and tasks.</li>
                <li><strong>Creative Writing:</strong> A space for your stories, poems, and creative thoughts.</li>
                <li><strong>Study Notes:</strong> Organize your study materials, summaries, and important notes.</li>
                <li><strong>Personal Diary:</strong> A private place for your thoughts, experiences, and reflections.</li>
            </ul>
            <p>
                We hope iNotebook becomes your go-to tool for all your note-taking needs. Thank you for choosing us to help you stay organized and creative!
            </p>
        </div>
    );
};

export default About;
