import axios from 'axios';
import * as repository from '../repositories/fightersRepository.js';

const getRanking = async () => {
  const result = await repository.getRanking();
  return result;
};

const battle = async (firstUser: string, secondUser: string) => {
  const firstUserStars = await getStars(firstUser);
  const secondUserStars = await getStars(secondUser);

  const draw = firstUserStars === secondUserStars;

  if (draw) {
    await repository.hasDraw(firstUser);
    await repository.hasDraw(secondUser);

    return {
      winner: null,
      loser: null,
      draw,
    };
  }

  const firstUserWon = firstUserStars > secondUserStars;

  if (firstUserWon) {
    await repository.hasWon(firstUser);
    await repository.hasLost(secondUser);

    return {
      winner: firstUser,
      loser: secondUser,
      draw,
    };
  } else {
    await repository.hasWon(secondUser);
    await repository.hasLost(firstUser);

    return {
      winner: secondUser,
      loser: firstUser,
      draw,
    };
  }
};

const verifyIfUsersExist = async (firstUser: string, secondUser: string) => {
  const firtUserExist = await repository.getUser(firstUser);
  const secondUserExist = await repository.getUser(secondUser);

  if (!firtUserExist) {
    await repository.insertUser(firstUser);
  }

  if (!secondUserExist) {
    await repository.insertUser(secondUser);
  }
};

const getStars = async (user: string) => {
  const userRepositories = await axios(
    `http://api.github.com/users/${user}/repos`,
  );
  const stars = userRepositories.data.reduce((acc: number, repo: any) => {
    return acc + repo.stargazers_count;
  }, 0);
  return stars;
};

export { getRanking, battle, verifyIfUsersExist };
