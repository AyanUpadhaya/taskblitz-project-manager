export const db = [
  {
    id: 1,
    title: "delectus aut autem",
    status: 'todo'
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    status: 'todo'
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    status: 'doing'
  },
  {
    id: 4,
    title: "et porro tempora",
    status: 'todo'
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    status: 'todo'
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    status: 'todo'
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    status: 'doing'
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    status: 'done'
  },
];

export const cardsCollection  = [
    {
        id: 1,
        title: 'Todo',
        items: db.filter(task=>task.status === "todo"),
        boardId : 1
    },
    {
        id: 2,
        title: 'Doing',
        items: db.filter(task=>task.status === "doing"),
        boardId : 1
    },
    {
        id: 3,
        title: 'Done',
        items: db.filter(task=>task.status === "done"),
        boardId : 1
    },
]

export const boards = [{
    id: 1,
    title: 'Kanabon Project',
    cardsCollections: cardsCollection.filter(card=>card.boardId==1)
}]