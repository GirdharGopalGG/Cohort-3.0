"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function createUser(username, age, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.create({
            data: {
                username,
                age,
                password,
            }
        });
        console.log(user);
    });
}
// createUser('gg3',7,'gg')
function createTodo(title, desc, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield client.todo.create({
            data: {
                title,
                desc,
                userId,
            }
        });
        console.log(todo);
    });
}
// createTodo('run','go to run',4)
app.get('/users/:username', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    const user = yield client.user.findFirst({
        where: {
            username: username
        },
        select: {
            age: true,
            username: true,
            id: true,
        }
    });
    console.log(user);
    res.json({
        user
    });
}));
// getUser('gg3')
function getTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield client.todo.findMany({
            where: {
                userId: userId
            }
        });
        console.log(todo);
    });
}
// getTodo(4)
function getUserAndTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield client.todo.findMany({
            where: {
                userId
            },
            select: {
                user: { select: {
                        username: true
                    } },
                title: true,
                desc: true
            }
        });
        console.log(todo);
    });
}
// getUserAndTodos(4)
app.listen(3001);
