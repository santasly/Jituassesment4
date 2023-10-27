interface Notebook {
    Id:number,
    Title:string,
    Content:string,
    createdAt:string,
}

const notes: Notebook[] = [
    {
        Id: 1,
        Title: 'Note 1',
        Content: 'This is the content of note 1',
        createdAt: new Date().toISOString(),
    },
    {
        Id: 2,
        Title: 'Note 2',
        Content: 'This is the content of note 2',
        createdAt: new Date().toISOString(),
    },
    {
        Id: 3,
        Title: 'Note 3',
        Content: 'This is the content of note 3',
        createdAt: new Date().toISOString(),
    },
    
];

export default notes