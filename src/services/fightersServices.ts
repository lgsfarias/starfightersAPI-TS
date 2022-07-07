import * as repository from '../repositories/fightersRepository.js';

const getRanking = async () => {
  const result = await repository.getRanking();
  return result;
};

export { getRanking };
