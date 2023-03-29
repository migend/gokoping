<script setup lang="ts"></script>

<template>
	<footer>
		<div class="footer-container">
			<div class="footer-column">
				<h3>Contact Us</h3>
				<ul>
					<li>
						<span>
							<Icon name="location" :size="20" />
						</span>
						3191 Ethels Spring Lake (Highlands), Florida NY
					</li>
					<li>
						<span>
							<Icon name="telephone" :size="20" />
						</span>
						919-485-0891
					</li>
					<li>
						<span>
							<Icon name="email" :size="20" />
						</span>
						gokoping@hotmail.com
					</li>
				</ul>
			</div>
			<div class="footer-column">
				<h3>Quick Links</h3>
				<ul>
					<li>About Us</li>
					<li>Shop</li>
					<li>My Account</li>
					<li>Delivery</li>
					<li>Policies</li>
				</ul>
			</div>
			<div class="footer-column">
				<h3>Customer Care</h3>
				<ul>
					<li>Size Chart</li>
					<li>Gift Vouchers</li>
					<li>Site Map</li>
					<li>Media</li>
					<li>Brand</li>
				</ul>
			</div>
			<div class="footer-column">
				<h3>Newsletter</h3>
				<ul>
					<li><input type="text" placeholder="Type Your Email"></li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	display: flex;
	width: 100%;
	background: var(--white-softer);
	padding: 5rem 1.5rem;
	margin-top: 5rem;
}

.footer-container {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	max-width: 120rem;
	justify-content: space-between;
	flex-wrap: wrap;
}

h3 {
	font-size: 2.1rem;
	font-weight: 500;
	margin-bottom: 3rem;
}

.footer-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	margin-bottom: 4rem;
}

li:first-child span {
	align-self: flex-start;
}

li {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;
	color: var(--gray);
}

li:last-child {
	margin-bottom: 0;
}

span {
	margin-right: 1.5rem;
	color: var(--black);
}

input {
	border: 1px solid var(--gray-lighter);
	padding: 1rem;
	color: var(--gray-softer);
}

@media only screen and (min-width: 992px) {
	footer {
		padding: 13.5rem 1.5rem;
		margin-top: 11.5rem;
	}
	.footer-container {
		flex-direction: row;
	}
	.footer-column {
		align-items: start;
	}

	li {
		justify-content: start;
	}
}
</style>