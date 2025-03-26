<script setup>
defineOptions({
	name: 'FooterComponent',
});
</script>

<template>
	<footer class="footer">
		<div class="footer-container">
			<div class="footer-section">
				<div class="footer-logo">
					<img
						src="/vite.svg"
						alt="GitHub Logo"
					/>
				</div>
				<p class="footer-subscribe-text">
					Subscribe to our developer newsletter
				</p>
				<p class="footer-subscribe-description">
					Get tips, technical guides, and best
					practices. Twice a month. Right in your
					inbox.
				</p>
				<button class="footer-subscribe-button">
					Subscribe
				</button>
			</div>
			<div class="footer-links">
				<div class="footer-column">
					<h4>Product</h4>
					<ul>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#"
								>Enterprise</a
							>
						</li>
						<li><a href="#">Copilot</a></li>
						<li>
							<a href="#">Security</a>
						</li>
						<li><a href="#">Pricing</a></li>
						<li><a href="#">Team</a></li>
						<li>
							<a href="#"
								>Resources</a
							>
						</li>
						<li><a href="#">Roadmap</a></li>
						<li>
							<a href="#"
								>Compare
								GitHub</a
							>
						</li>
					</ul>
				</div>
				<div class="footer-column">
					<h4>Platform</h4>
					<ul>
						<li>
							<a href="#"
								>Developer
								API</a
							>
						</li>
						<li>
							<a href="#">Partners</a>
						</li>
						<li>
							<a href="#"
								>Education</a
							>
						</li>
						<li>
							<a href="#"
								>GitHub CLI</a
							>
						</li>
						<li>
							<a href="#"
								>GitHub
								Desktop</a
							>
						</li>
						<li>
							<a href="#"
								>GitHub
								Mobile</a
							>
						</li>
					</ul>
				</div>
				<div class="footer-column">
					<h4>Support</h4>
					<ul>
						<li><a href="#">Docs</a></li>
						<li>
							<a href="#"
								>Community
								Forum</a
							>
						</li>
						<li>
							<a href="#"
								>Professional
								Services</a
							>
						</li>
						<li>
							<a href="#"
								>Premium
								Support</a
							>
						</li>
						<li><a href="#">Skills</a></li>
						<li><a href="#">Status</a></li>
						<li>
							<a href="#"
								>Contact
								GitHub</a
							>
						</li>
					</ul>
				</div>
				<div class="footer-column">
					<h4>Company</h4>
					<ul>
						<li><a href="#">About</a></li>
						<li>
							<a href="#"
								>Customer
								stories</a
							>
						</li>
						<li><a href="#">Blog</a></li>
						<li>
							<a href="#"
								>The ReadME
								Project</a
							>
						</li>
						<li><a href="#">Careers</a></li>
						<li>
							<a href="#">Newsroom</a>
						</li>
						<li>
							<a href="#"
								>Inclusion</a
							>
						</li>
						<li>
							<a href="#"
								>Social
								Impact</a
							>
						</li>
						<li><a href="#">Shop</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	background-color: #0d1117;
	color: #c9d1d9;
	padding: 2rem;
}

.footer-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.footer-section {
	max-width: 300px;
}

.footer-logo img {
	width: 50px;
	margin-bottom: 1rem;
}

.footer-subscribe-text {
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
}

.footer-subscribe-description {
	font-size: 0.9rem;
	margin-bottom: 1rem;
}

.footer-subscribe-button {
	background-color: transparent;
	border: 1px solid #c9d1d9;
	color: #c9d1d9;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-size: 0.9rem;
}

.footer-links {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
}

.footer-column h4 {
	font-size: 1rem;
	margin-bottom: 0.5rem;
}

.footer-column ul {
	list-style: none;
	padding: 0;
}

.footer-column li {
	margin-bottom: 0.5rem;
}

.footer-column a {
	color: #c9d1d9;
	text-decoration: none;
	font-size: 0.9rem;
}

.footer-column a:hover {
	text-decoration: underline;
}
</style>
