export default (posts = [], action) => {

    switch (action.type){
        case 'FETCH_POST':{
            return action.payload;
        }
        
       default : {
           return posts;
       }
    }
    
};




