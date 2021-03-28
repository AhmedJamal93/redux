import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addOpenWindow, 
  addCloseWindow, 
  addNew, 
  deleteBook, 
  updateBook, 
  updateCloseWindow, 
  updateOpenWindow} from './actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function Blaze() {
  const list = useSelector(state => state.readingList);
  const addOpen = useSelector(state => state.addOpen);
  const updateOpen = useSelector(state => state.updateOpen)
  const dispatch = useDispatch();

  const [id, setId] = useState(1)
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState(0)

  const AddNewBook = () => {
      setId(id+1)
    dispatch(addNew({id, title, category, description, price}))
    dispatch(addCloseWindow())
  }

  const UpdateBookOpen = (book) => {
    setTitle(book.title)
    setCategory(book.category)
    setDescription(book.description)
    setPrice(book.price)
    setId(book.id)

    dispatch(updateOpenWindow())
  }

  const UpdateBook = (id) => {
    dispatch(updateBook(id, {id:id, title, category, description, price}))
    dispatch(updateCloseWindow())
  }

  return (
      <div>
          <h2 style={{margin:'10px'}}>Reading List</h2>
          <button onClick={()=>dispatch(addOpenWindow())} style={{margin:'10px'}}>Add New Book</button>
          {list.length === 0 && 
          <div>
            <h4 style={{color:'red'}}>You Have no Books in Your Reading List! Please Add Some New Books!</h4>
            </div>
            }
          <table style={{width: '100%'}}>
          <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Delete</th>
          </tr>
          {list.map((book) => {
              return(
                  <tr 
                  key={book.id}
                  >
                      <td onClick={()=> UpdateBookOpen(book)} style={{'textAlign':'center'}}>{book.title}</td>
                      <td onClick={()=> UpdateBookOpen(book)} style={{'textAlign':'center'}}>{book.category}</td>
                      <td onClick={()=> UpdateBookOpen(book)} style={{'textAlign':'center'}}>{book.price}</td>
                      <td>
                        <button 
                          onClick={()=>dispatch(deleteBook(book.id))}
                        >
                        Delete
                        </button>
                      </td>
              </tr>
              )
          })
          }
          </table>
          <div>
          <Dialog open={addOpen} onClose={() => dispatch(addCloseWindow())} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Book</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please Enter the Details of your New Book
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="category"
                    label="Category"
                    type="text"
                    fullWidth
                    onChange={(e)=>setCategory(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="Price"
                    type="number"
                    fullWidth
                    onChange={(e)=>setPrice(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="description"
                    type="text"
                    fullWidth
                    onChange={(e)=>setDescription(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => dispatch(addCloseWindow())} color="primary">
                    Cancel
                </Button>
                <Button onClick={AddNewBook} color="primary">
                    Add
                </Button>
                </DialogActions>
            </Dialog>  
          </div> 
          <div>
          <Dialog open={updateOpen} onClose={()=>dispatch(updateCloseWindow())} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Book Details</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Enter Changes to Book Details
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="category"
                    label="Category"
                    type="text"
                    fullWidth
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="Price"
                    type="number"
                    fullWidth
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="description"
                    type="text"
                    fullWidth
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>dispatch(updateCloseWindow())} color="primary">
                    Cancel
                </Button>
                <Button onClick={()=>UpdateBook(id)} color="primary">
                    Update
                </Button>
                </DialogActions>
            </Dialog>
          </div>      
      </div>
  )
}



export default Blaze
