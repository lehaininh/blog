import React from 'react';
import styles from './post.scss';
import CSSModules from 'react-css-modules';

class Post extends React.Component {
    render() {
        let post = this.props.post;
        let post_url = '/';
        return (
            <div styleName="post_container">
                <div styleName="post">
                    <a styleName="post_title" href={post_url}>
                        {post.title}
                    </a>
                    {
                        post.photo && (
                            <img src={post.photo}/>
                        )
                    }
                    <p>{post.body}</p>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    post: React.PropTypes.object.isRequired
};

export default CSSModules(Post, styles, {allowMultiple: true});
