import db from '../config/database.js';

const getRanking = async () => {
  const query = `SELECT username,wins,losses,draws 
  FROM fighters 
  ORDER BY wins DESC, draws DESC, losses ASC`;
  const result = await db.query(query);
  return result.rows;
};

export { getRanking };
