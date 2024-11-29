import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "JavaScript",
        tagDesc: "an object-oriented computer programming language commonly used to create interactive effects within web browsers."
    },
    {
        id: 2,
        tagName: "Java",
        tagDesc: "java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, and reliable."
    },
    {
        id: 3,
        tagName: "Python",
        tagDesc: "a computer programming language often used to build websites and software, automate tasks, and analyze data."
    },
    {
        id: 4,
        tagName: "Rust",
        tagDesc: "Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency."
    },
    {
        id: 5,
        tagName: "Ruby on Rails",
        tagDesc: "an MVC (model view controller)-based framework used for web development and app programming at the server-side of the applications."
    },
    {
        id: 6,
        tagName: "SpringBoot",
        tagDesc: "an open-source, microservice-based Java web framework offered by Spring, particularly useful for software engineers developing web apps and microservices."
    },
    {
        id: 7,
        tagName: "Django",
        tagDesc: "a high-level Python web framework that enables rapid development of secure and maintainable websites."
    },
    {
        id: 8,
        tagName: "React.js",
        tagDesc: "React. js, more commonly known as React, is a free, open-source JavaScript library. "
    },
    {
        id: 9,
        tagName: "Node.js",
        tagDesc: "an Open Source, cross-platform runtime environment for executing JavaScript code."
    },
    {
        id: 10,
        tagName: "Flask",
        tagDesc: "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries."
    },
    {
        id: 11,
        tagName: "C++",
        tagDesc: "C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications."
    },
    {
        id: 12,
        tagName: "C#",
        tagDesc: "is an object-oriented programming language from Microsoft that enables developers to build applications that run on the .NET platform."
    }]
    
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default tags
