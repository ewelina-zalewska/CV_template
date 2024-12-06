import { CurriculumVitaeMainInformation } from "@/components/CurriculumVitaeMainInformation";
import { CurriculumVitaeDescription } from "@/components/CurriculumVitaeDescription";

export const CurriculumVitae = () => {
	return (
		<div id="container">
			<CurriculumVitaeMainInformation />
			<div>
				<CurriculumVitaeDescription />
				<CurriculumVitaeDescription />
			</div>
		</div>
	);
};
