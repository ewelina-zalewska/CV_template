import { data } from "@/database/aboutMeInformation";

export const CurriculumVitaeMainInformation = () => {
	const { name, position } = data;
	return (
		<div id="mainInformation">
			<div className="road-sign-image" />
			<div className="introduce">
				<h2>{position}</h2>
				<h2 className="name">by {name}</h2>
			</div>
		</div>
	);
};
