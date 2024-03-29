import React from "react";
import CustomerReviewCards from "./Cards_review";
import Aryan from "../../assets/Aryan.jpeg";
import "./customer_review_home.css";
import starsBg from "../../assets/stars-bg@2x.png";
function CustomerReviewHome() {
	var review = [
		{
			text: "Single Grain has been key in helping us generate B2B engagement across digital channels. We can count on them to bring new ideas to the table consistently and that's why we love working with them.",
			author: "Harry Smith",
			company: "Co-Founder, Imaginary Company",
			imga: Aryan,
		},
	];
	return (
		<div>
			<div className="CustomerReviews">
				<div className="CustomerReview">
					<div className="CustomerReviewHead">Meet Your Instructor</div>
					<div className="CustomerReviewsh2">
						Don't listen to us. Listen to our clients
					</div>
				</div>
				<div className="CustomerReviewCards">
					<CustomerReviewCards
						text={review[0].text}
						author={review[0].author}
						company={review[0].company}
						imga={review[0].imga}
					/>
					<CustomerReviewCards
						text={review[0].text}
						author={review[0].author}
						company={review[0].company}
						imga={review[0].imga}
					/>
					<CustomerReviewCards
						text={review[0].text}
						author={review[0].author}
						company={review[0].company}
						imga={review[0].imga}
					/>
				</div>
			</div>
			<div className="CustomerStars">
				<img class="stars-bg-customer" alt="" src={starsBg} />
			</div>
		</div>
	);
}

export default CustomerReviewHome;
