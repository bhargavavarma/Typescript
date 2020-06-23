import React, { Component } from 'react'

import { observer } from 'mobx-react'

import PostModel from '../../stores/models/PostModel'

import { PostWrapper, PostItem } from './styledComponents'

type PostProps = {
  post: PostModel
}

@observer
class Post extends Component<PostProps> {
  render() {
    const { post } = this.props
    const { title, body } = post
    return (
      <PostWrapper>
        <PostItem>{title}</PostItem>
        <PostItem>{body}</PostItem>
      </PostWrapper>
    )
  }
}

export default Post
