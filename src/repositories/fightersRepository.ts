import db from '../config/database.js';
import sqlString from 'sqlstring';

const getRanking = async () => {
  const query = `SELECT username,wins,losses,draws 
  FROM fighters 
  ORDER BY wins DESC, draws DESC, losses ASC`;
  const result = await db.query(query);
  return result.rows;
};

const getUser = async (username: string) => {
  const query = `SELECT * FROM fighters 
  WHERE username = ${sqlString.escape(username)}`;
  const user = await db.query(query);
  return user.rows[0];
};

const insertUser = async (username: string) => {
  const query = `INSERT INTO fighters (username,wins,losses,draws)
  VALUES (${sqlString.escape(username)},0,0,0)`;
  await db.query(query);
};

const hasWon = async (username: string) => {
  const query = `UPDATE fighters
  SET wins = wins + 1
  WHERE username = ${sqlString.escape(username)}`;
  await db.query(query);
};

const hasLost = async (username: string) => {
  const query = `UPDATE fighters
  SET losses = losses + 1
  WHERE username = ${sqlString.escape(username)}`;
  await db.query(query);
};

const hasDraw = async (username: string) => {
  const query = `UPDATE fighters
  SET draws = draws + 1
  WHERE username = ${sqlString.escape(username)}`;
  await db.query(query);
};

export { getRanking, getUser, insertUser, hasWon, hasLost, hasDraw };
