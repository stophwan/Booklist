import produce from "immer"

const initialState = {
    books: [
        {
            title: 'CODE', 
            subtitle: '하드웨어와 소프트웨어에 숨어 있는 언어',
            likes:0,
            img: ''
        },
        {
            title: 'COD', 
            subtitle: '하드웨어와 소프트웨어',
            likes:0,
            img: ''
        }
    ],
    selected: undefined
}

const reducer = produce((state, action) =>{
    switch(action.type){
        case 'BOOK_SELECT':
            state.selected = action.payload;
            break;
            // return{
            //     books: state.books,
            //     selected: action.payload
            // }
        case 'BOOK_LIKE':
            state.books.forEach((book) => {
                if(book.title === action.title){
                    book.likes +=1
                }
            });
            break;
            // const newBooks = state.books.map((book) => {
            //     if (book.title === action.title){
            //         book.likes +=1;
            //     }
            //     return book;
            // })
            // return {
            //     books: newBooks,
            //     selected: state.selected
            // }
        case 'BOOK_ADD':
            state.books.push({
                title: `Book ${Math.floor(Math.random() * 1000)}`,
                subtitle: `Book ${Math.floor(Math.random() * 1000)}`,
                likes: 0
            })
            // return{
            //     books: state.books.concat({
            //         title: `Book ${Math.floor(Math.random() * 1000)}`,
            //         subtitle: `Book ${Math.floor(Math.random() * 1000)}`,
            //         likes: 0
            //     }),
            //     selected: state.selected
            // }
        default:
            break;
    }
}, initialState);


export default reducer;

