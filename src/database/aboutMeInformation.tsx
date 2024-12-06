export type Data = {
	name: string;
	lastName?: string;
	position: string;
};

export type Experience = {
	year: string;
	description: string;
}[];

export const data: Data = {
	name: "Ewelina",
	position: "Frontend Web Development",
};

export const experiences: Experience = [
	{
		year: "2015",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	},
	{
		year: "2018",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	},
	{
		year: "2022",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	},
];

export const education: string[] = [
	"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	"Atque maiores quasi excepturi animi dolor ducimus ratione exercitationem sapiente quos cum a facere cupiditate recusandae.",
	"Dolorum natus minus temporibus.",
	"Esse harum perspiciatis facere ut ea vero, atque iure sint quaerat beatae sed adipisci voluptates similique tempora sequi.",
];
