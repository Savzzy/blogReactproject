import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if(this.props.posts){
            return this.props.posts.map((post)=>{
                return <div>posts</div>
            })
        }
        return <div>gfdgf</div>
           
        
        
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);
