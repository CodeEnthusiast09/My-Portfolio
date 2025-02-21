import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							<p className="projects-subtitle-description">
								I've worked on a variety of projects over the
								years and I'm proud of the progress I've made.
								Many of these projects are open-source and
								available for others to explore and contribute
								to. If you're interested in any of the projects
								I've worked on, please feel free to check out
								&nbsp;
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/CodeEnthusiast09"
									className="projects-link"
								>
									my GitHub
								</a>
								&nbsp; and suggest any improvements or
								enhancements you might have in mind.
								Collaborating with others is a great way to
								learn and grow, and I'm always open to new ideas
								and feedback.
								<br />
								<br />
								In addition to these open-source projects, I've
								also had the privilege of working on several
								confidential projects for enterprise clients.
								These projects have allowed me to gain valuable
								experience in building scalable and secure web
								applications that meet the unique needs of each
								client. If you're interested in learning more
								about my work on enterprise projects, please
								feel free to reach out to me directly.
							</p>
							<img
								src="/projects.webp"
								alt="an AI generated pic of a work environment"
								className="projects-image"
							/>
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
