import styled, { css } from 'styled-components';

export const GameDetail = styled.section`
	${({ theme }) => css`
		/* background-color: ${theme.colors.baseBg1}; */
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100vh;
	`}
`;

export const GameDetailContent = styled.main`
	${() => css`
		width: 100%;
		display: flex;
		grid-row: auto;
		flex-direction: column;
		box-sizing: border-box;
	`}
`;

export const GameDetailTop = styled.section`
	${({ theme }) => css`
		width: 100%;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: absolute;

		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		div.mainAtrib {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}

		div.atribh3 {
			display: flex;
			gap: 10px;
		}

		div.atribh3 h3 {
			margin: 0;
			margin-top: 0.5rem;
		}

		div.atrib {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;
		}

		svg.star {
			fill: ${theme.colors.buttonGold};
			font-size: 16px;
		}
	`}
`;

export const GameDetailTrailers = styled.section`
	${() => css`
		width: auto;
		height: 80%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-evenly;
	`}

	div.yt {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	div.edit {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		width: auto;
		box-sizing: border-box;
	}
	div.edit {
		padding: 5px;
	}

	div.edit button {
		background-color: #dddddd;
		color: #000;
		margin: 10px;
	}

	div.edit button:hover {
		background-color: #d2d2e3;
	}
`;

export const GameDetailDesc = styled.section`
	${() => css`
		display: flex;
		width: auto;
		height: 20%;
		background-color: #00000040;
		text-align: center;
		justify-content: center;
		align-items: center;
		margin-top: 10px;

		article {
			width: 50%;
			display: inline-block;
		}
	`}
`;