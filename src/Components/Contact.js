import React, { useState } from "react";
import {
	Container,
	Box,
	Typography,
	TextField,
	Button,
	Grid,
	Paper,
	Link,
} from "@mui/material";
import { styled } from "@mui/system";

const ContactBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(4),
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[5],
	color: theme.palette.text.primary,
}));

const Contact = () => {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message }),
		})
			.then(() => alert("Message sent!"))
			.catch((error) => alert(error));
	};

	return (
		<section id="contact">
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={7}>
						<Paper elevation={3} sx={{ p: 2 }}>
							<iframe
								width="100%"
								height="300"
								title="map"
								frameBorder={0}
								marginHeight={0}
								marginWidth={0}
								style={{ border: 0 }}
								src="https://www.google.com/maps/embed/v1/place?q=1800+Monroe+ave+Glenview+Illinois+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
								allowFullScreen
							/>
							<ContactBox>
								<Typography variant="h6">ADDRESS</Typography>
								<Typography>
									1800 Monroe Ave <br /> Glenview, IL 60025
								</Typography>
								<Typography variant="h6" sx={{ mt: 2 }}>
									EMAIL
								</Typography>
								<Link href="mailto:maazy2009@gmail.com" color="secondary">
									maazy2009@gmail.com
								</Link>
								<Typography variant="h6" sx={{ mt: 2 }}>
									PHONE
								</Typography>
								<Typography>401-499-0325</Typography>
							</ContactBox>
						</Paper>
					</Grid>
					<Grid item xs={12} md={5}>
						<Paper elevation={3} sx={{ p: 5, textAlign: "center" }}>
							<form onSubmit={handleSubmit} name="contact" data-netlify="true">
								<Typography variant="h4" gutterBottom>
									Contact Me
								</Typography>
								<Typography variant="body1" paragraph>
									For all Inquiries please fill out the form below
								</Typography>
								<TextField
									fullWidth
									label="Name"
									variant="filled"
									margin="normal"
									InputProps={{
										style: { color: "#fff", backgroundColor: "#0D47A1" },
									}}
									InputLabelProps={{ style: { color: "#ccc" } }}
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<TextField
									fullWidth
									label="Email"
									type="email"
									variant="filled"
									margin="normal"
									InputProps={{
										style: { color: "#fff", backgroundColor: "#0D47A1" },
									}}
									InputLabelProps={{ style: { color: "#ccc" } }}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<TextField
									fullWidth
									label="Message"
									variant="filled"
									margin="normal"
									multiline
									rows={4}
									InputProps={{
										style: { color: "#fff", backgroundColor: "#0D47A1" },
									}}
									InputLabelProps={{ style: { color: "#ccc" } }}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
									sx={{ mt: 2 }}
								>
									Submit
								</Button>
							</form>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Contact;
