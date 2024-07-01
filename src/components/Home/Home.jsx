import React from "react";
import "./Home.css";
import Me from "../../assets/images/avatar.webp";

const Home = () => {
	return (
		<section className="home">
			<div className="container">
				<div className="content">
					<div className="hero-main">
						<div className="hero-text">
							<h1>editor & designer</h1>
							<p>
								im neqetria, 15 yo editor & graphic designer based in Turkey.
							</p>
							<div className="contact-icon">
								<a href="https://instagram.com/neqetria/" target="_blank">
									<i className="fa-brands fa-instagram"></i>
								</a>

								<a
									href="https://discord.gg/HqNGuA9BDg"
									target="_blank"
								>
									<i className="fa-brands fa-discord"></i>
								</a>

								<a href="mailto:neqetria@proton.me">
									<i className="fa-solid fa-envelope"></i>
								</a>
							</div>
						</div>
						<div className="hero-img">
							<img src={Me} alt={Me} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
