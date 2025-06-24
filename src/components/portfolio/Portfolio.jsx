import React from "react";
import "./portfolio.css";
import Img from '../../assets/raya-social.jpg';
import MovieList from '../../assets/movie-list.jpg';
import BookList from '../../assets/books_list.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const projects = [
  {
    id: 1,
    title: "Contents Sell Service",
    description:
      "We craft engaging, high-quality videos that captivate ",
    seemore : "see more...",
    image: Img,
    tech: [<FaReact />, <FaHtml5 />, <RiTailwindCssFill />, <FaJsSquare />],
    liveLink: "https://raaya-social-nine.vercel.app/",
    githubLink: "https://github.com/mazumdaratik/video-creation-service-Frontend",
  },
  {
    id: 2,
    title: "Movie-Watch Panel",
    description:
      "Movie Watchlist: is a simple React app that, ",
    image: MovieList,
    tech: [<FaReact />, <FaHtml5 />, <RiTailwindCssFill />, <FaJsSquare />],
    seemore : "see more...",
    liveLink: "https://moviewatch-list.vercel.app/",
    githubLink: "https://github.com/mazumdaratik/Movie-Watch-List",
  },
  {
    id: 3,
    title: "Books Finder",
    description:
      "A clean and simple app to browse and manage your ",
    seemore : "see more...",
    image: BookList,
    tech: [<FaReact />, <FaHtml5 />, <RiTailwindCssFill />, <FaJsSquare />],
    liveLink: "https://books-finder-ochre.vercel.app/",
    githubLink: "https://github.com/mazumdaratik/BooksFinder",
  },
];

const Portfolio = () => {

  return (
    
 
    <div id="portfolio">
        <div>
        <h2 className="section__title">My<span className='ski'> P</span>ortfolio</h2>
        <span className="section__subtitle">Some of my works</span>
        </div>
    <section className='cardContainer'>




      {
      projects.map((project) => (
        <div className='card' key={project.id}>
          <h2 className="title">{project.title}</h2>
          <img src={project.image} alt={project.title} className='image' />
          <p className='description'>{project.description} {project.seemore}</p>
            <div className="tech-icons">
                {project.tech.map((icon, i) => (
                    <span key={i} className="tech-icon">
                     {icon}
                    </span>
                ))}
            </div>

          <div className='buttons'>
            <a href={project.liveLink} className='btn live'>
              Live preview
            </a>
            <a href={project.githubLink} className='btn github'>
              Check GitHub 
            </a>
          </div>
        </div>
      ))
        }
 
    </section>
    </div>
  )
}

export default Portfolio