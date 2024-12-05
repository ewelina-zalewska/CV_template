type Props = {
	title: string;
};

export const Title = ({ title }: Props) => {
	return (
		<div id="title">
			<h1>{title}</h1>
		</div>
	);
};
