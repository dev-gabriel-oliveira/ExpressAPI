import { Request, Response } from 'express';

// Exemplo de dados simulados (substitua por interações com o banco de dados se necessário)
const users: any[] = [
  { id: 1, name: 'Usuário 1' },
  { id: 2, name: 'Usuário 2' },
  { id: 3, name: 'Usuário 3' },
];

// Controlador para obter todos os usuários
export const getAllUsers = (req: Request, res: Response) => {
  res.json(users);
};

// Controlador para obter um usuário pelo ID
export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

// Controlador para criar um novo usuário
export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };

  users.push(newUser);

  res.status(201).json(newUser);
};

// Controlador para atualizar um usuário pelo ID
export const updateUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const { name } = req.body;
    users[userIndex].name = name;

    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

// Controlador para excluir um usuário pelo ID
export const deleteUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};
