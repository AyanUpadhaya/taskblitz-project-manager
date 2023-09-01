import React, { useState } from 'react';
import BoardView from './BoardView';
import '../App.css'
import { boards } from "../Data/data";
const DashBoardView = () => {
    const [board,setBoard] = useState(0);
    return (
        <div className='board'>
            <div className='text-left p-5 space-y-4'>
                <p>
                    <strong>Ayan Upadhaya's workspace</strong>
                </p>
                <hr></hr>
                <p>
                    <strong>Your Boards</strong> <button>+</button>
                </p>
               
                <ul>
                {boards.map(board =><li key={board.id} className='bg-secondary p-3 rounded-md text-accent-content cursor-pointer'>{board.title}</li>)}
                </ul>
            </div>
            <BoardView cardsCollections={boards[board].cardsCollections}/>
        </div>
    );
};

export default DashBoardView;