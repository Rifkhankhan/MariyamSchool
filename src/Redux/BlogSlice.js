import { createSlice }  from '@reduxjs/toolkit'

const initialAuthState = {
    blogs:[],
    loading:false,
    comments:[]
}
const blogSlice = createSlice ({
    name:'blog',
    initialState:initialAuthState,
    reducers:{
       toggleLoadingSpinner(state,action) {
        state.loading = !state.loading
       },
        addBlog(state,action){
            state.blogs.push(action.payload)
           window.location.reload()

            // let userData = JSON.parse(localStorage.getItem('user'))
            // userData.result.card = state.cardItems
          
            // localStorage.setItem('user',JSON.stringify(userData))
        }, pushComment(state,action){
           
            state.comments.push(action.payload)

        }, getComments(state,action){
            state.comments = action.payload
        },
        addWish(state,action){
            state.wish = action.payload
        },
        likeBlog(state,action){
            // get the specific blog
            let blog = state.blogs.find(blog => blog._id === action.payload.blogId) 

            // get the index of the blog in the blogs array
            const index = state.blogs.indexOf(blog)

            // check whether the use is already liked or not
            if(!blog.likes.includes(action.payload.userId)){
                console.log("liked");
                // push the id into the blog
                blog.likes.push(action.payload.userId)
                console.log(blog);

            } else {
                console.log("disliked");

                   // remove id into the blog
                   blog.likes = blog.likes.filter(id => id !== action.payload.userId)
            }

            // remove the blog from the blogs
            state.blogs = state.blogs.filter(blog => blog._id !== action.payload.blogId)
                            
            // put the blog the previous place in the blogs
            state.blogs.splice(index,0,blog)
        },
        disLikeBlog(state,action){
            let blog = state.blogs.find(blog => blog._id === action.payload.blogId)
            blog.likes.push(action.payload.userId)

            state.blogs = state.blogs.filter(blog => blog._id !== action.payload.blogId)
            state.blogs.push(blog)
            console.log(state.blogs);
        },
        getBlogs(state,action){
            state.blogs = [...action.payload]
        },
        getCardLength(state){
            state.cardItems = JSON.parse(localStorage.getItem('user')).result.card.length
        },
        removeFromCard(state,action){
        }, 
        buy(state,action){
            state.buyItems.push(action.payload)
        }, 
        
        removeItemFromPending(state,action){
            state.pending = state.pending.filter(pen => pen.id !== action.payload)
        },
        addItemIntoProcessing(state,action){
            state.processing.push(action.payload)
        },
        addItemIntoShip(state,action){
            state.ship.push(action.payload)
        },
        removeItemFromProcessing(state,action){
            state.processing = state.processing.filter(pen => pen.id !== action.payload)
        },
        fetchProducts(state,action) {
            state.products = action.payload
        }
      
    }
})

export const blogAction = blogSlice.actions
export default blogSlice.reducer