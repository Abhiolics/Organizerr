import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/images/task.jpg";
import taskImage2 from "../assets/images/task1.jpg";
import taskImage3 from "../assets/images/task3.jpg";
import uiux from "../assets/images/uiux.jpg";
import { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board: Columns = {
	backlog: {
		name: "Done",
		items: [
			{
				id: uuidv4(),
				title: "UI/UX Designer",
				description: "Crafting Experiences: UI/UX Designer Redefines Digital Interaction.",
				priority: "medium",
				deadline: 50,
				image: uiux,
				alt: "task image",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Design", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "UI Designer",
				description: "UI Designers Orchestrates Vision into Action for Next-Gen Solutions, creating visually appealing UI.",
				priority: "low",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Design", ...getRandomColors() },
				],
			},
		],
	},
	pending: {
		name: "Pending",
		items: [
			{
				id: uuidv4(),
				title: "Product Designer",
				description: "Product Designer Blends Functionality with Aesthetics, Shaping the Future of User Experience.",
				priority: "high",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Product Manager",
				description: "Product Manager Orchestrates Vision into Action for Next-Gen Solutions, Shaping the Future of Industry.",
				priority: "low",
				deadline: 50,
				image: taskImage,
				alt: "task image",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	todo: {
		name: "To Do",
		items: [
			{
				id: uuidv4(),
				title: "Website designer",
				description: "Website Designer Seamlessly Fuses Creativity and Functionality for Captivating Online Experiences.",
				priority: "medium",
				deadline: 50,
				image: taskImage3,
				alt: "task image",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	doing: {
		name: "On Going",
		items: [
			{
				id: uuidv4(),
				title: "Front-end Developer",
				description: "Looking for a frontend intern.",
				priority: "low",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Sales Executive",
				description: "Contact for more info at sales@hr.com",
				priority: "medium",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	done: {
		name: "Next",
		items: [
			{
				id: uuidv4(),
				title: "Software Developer",
				description: "Software Developer Transforms Ideas into Seamless Digital Solutions, One Line at a Time.",
				priority: "high",
				deadline: 50,
				image: taskImage2,
				alt: "task image",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
};