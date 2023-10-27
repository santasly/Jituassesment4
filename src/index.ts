
import notes from './data'
import  Express, { Request, Response }  from 'express';


interface Note {
    Id:number,
    Title:string,
    Content:string,
    createdAt:string,
}



const app = Express();
app.use(Express.json())

const createNote = (req:Request,res:Response)=>{

    try {
        
    const note:Note = req.body as unknown as Note;

    console.log(note)
// append
    notes.push(note)

    // new notes array
    res.send(notes)
    } catch (error) {
        res.status(201).json(`error is ${error}`)
    }



}

const getAllnotes = (req:Request,res:Response)=>{

    res.status(200).send(notes)

}


const Updatenote = (req:Request,res:Response)=>{
    
    const {Id} = req.params;
    const noteId = parseInt(Id);
    const updatedNote:Note = req.body as unknown as Note;

    const index = notes.findIndex(note => note.Id === noteId);

    if(index === -1) {
        return res.status(404).send("Note not found");
    }

    notes[index] = {
        ...notes[index],
        ...updatedNote,
        Id: noteId 
    };

    res.status(200).send(notes[index]);
}


const Deletenote = (req:Request,res:Response)=>{
    const {Id} = req.params;
    const noteId = parseInt(Id);

    const index = notes.findIndex(note => note.Id === noteId);
    

    if(index === -1) {
        return res.status(404).send("Note not found");
    }

    notes.splice(index, 1);

    res.status(200).send("Note deleted");
    console.log(Deletenote);
    

}







app.post('/createnote', createNote)
app.get('/getallnotes', getAllnotes)
app.put('/updatenote/:Id',Updatenote)
app.delete('/deletenote/:Id', Deletenote)




app.listen(3000,()=>{console.log("sever is running ");
})


