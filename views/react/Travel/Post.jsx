import React from 'react';
import styles from './post.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

let convertTimestampToReadable = (date) => {
    let date_string = date.getDate();
    let month_string = date.getMonth();
    if (date_string  < 10) date_string = '0' + date_string;
    if (month_string < 10) month_string = '0' + month_string;
    return `${date_string}-${month_string}-${date.getFullYear()}`;
};

class Post extends React.Component {
    render() {
        let post = this.props.post;
        let post_url = '/';
        let created_at = convertTimestampToReadable(post.created_at);
        return (
            <div styleName="post_container">
                <div styleName="post">
                    <a styleName="post_title" href={post_url}>
                        {post.title}
                    </a>
                    <div styleName="post_stamp">
                        <p>
                            <span styleName="date">{created_at} </span>
                            <span style={{"font-style": "italic"}}>in </span>
                            <a href='/' styleName="post_tag">
                                {post.tag}
                            </a>
                        </p>
                    </div>
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
    post: PropTypes.object.isRequired
};

export default CSSModules(Post, styles, {allowMultiple: true});
