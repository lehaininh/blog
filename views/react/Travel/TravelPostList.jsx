import React from 'react';
import styles from './travel_post_list.scss';
import CSSModules from 'react-css-modules';
import Post from './Post.jsx';

class TravelPostList extends React.Component {
    constructor(props) {
        super(props);
        let post = {
            title: 'Title of the post',
            body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
            photo: 'http://s2.favim.com/orig/141119/animals-cute-divine-shine-Favim.com-2248172.png'
        };
        let posts = [];
        for (let i=0; i<10; ++i) posts.push(post);
        this.state = {
            posts: posts
        };
    }

    render() {
        let post_components = this.state.posts.map((post, idx) => {
            return (<Post key={idx} post={post}/>);
        });
        return (
            <div styleName="post_list">
                {post_components}
            </div>
        );
    }
}

export default CSSModules(TravelPostList, styles, {allowMultiple: true});
