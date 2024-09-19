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
								im neqetria, editor & graphic designer based in Turkey.
								mail for business: neqetria@gmail.com
							</p>
							<div className="contact-icon">
								<a href="https://open.spotify.com/user/rm6k4vch2svjryfdmhop73n7y?si=720d04bbd8394164" target="_blank">
									<i className="fa-brands fa-spotify"></i>
								</a>

								<a
									href="https://discord.com/users/1251184286959145094"
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
