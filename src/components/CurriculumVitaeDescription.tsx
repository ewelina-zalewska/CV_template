import { experiences, education } from "@/database/aboutMeInformation";
type Props = {
	title: string;
};

export const CurriculumVitaeDescription = ({ title }: Props) => {
	const showExperienceSectionCondition: boolean = title === "experience";
	const showEducationSectionCondition: boolean = title === "education";

	return (
		<div className="description">
			<h3>{title}</h3>
			{showExperienceSectionCondition &&
				experiences.map(({ year, description }, i) => (
					<div className="experience" key={i}>
						<p>{year}</p>
						<p>{description}</p>
					</div>
				))}
			<ul style={{ display: `${showExperienceSectionCondition && "none"}` }}>
				{showEducationSectionCondition &&
					education.map((educationStep, i) => <li key={i}>{educationStep}</li>)}
			</ul>
		</div>
	);
};
