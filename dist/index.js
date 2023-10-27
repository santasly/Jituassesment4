"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./data"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const createNote = (req, res) => {
    try {
        const note = req.body;
        console.log(note);
        // append
        data_1.default.push(note);
        // new notes array
        res.send(data_1.default);
    }
    catch (error) {
        res.status(201).json(`error is ${error}`);
    }
};
const getAllnotes = (req, res) => {
    res.status(200).send(data_1.default);
};
const Updatenote = (req, res) => {
    const { Id } = req.params;
    const noteId = parseInt(Id);
    const updatedNote = req.body;
    const index = data_1.default.findIndex(note => note.Id === noteId);
    if (index === -1) {
        return res.status(404).send("Note not found");
    }
    data_1.default[index] = Object.assign(Object.assign(Object.assign({}, data_1.default[index]), updatedNote), { Id: noteId });
    res.status(200).send(data_1.default[index]);
};
const Deletenote = (req, res) => {
    const { Id } = req.params;
    const noteId = parseInt(Id);
    const index = data_1.default.findIndex(note => note.Id === noteId);
    if (index === -1) {
        return res.status(404).send("Note not found");
    }
    data_1.default.splice(index, 1);
    res.status(200).send("Note deleted");
    console.log(Deletenote);
};
app.post('/createnote', createNote);
app.get('/getallnotes', getAllnotes);
app.put('/updatenote/:Id', Updatenote);
app.delete('/deletenote/:Id', Deletenote);
app.listen(3000, () => {
    console.log("sever is running ");
});
