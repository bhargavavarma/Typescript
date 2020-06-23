import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import PostList from '../../components/PostList'

import PostStore from '../../stores/PostStore'

import { PostsWrapper } from './styledComponents'

interface PostRouteProps {}

interface InjectedProps extends PostRouteProps {
  postStore: PostStore
}

@inject('postStore')
@observer
class PostRoute extends Component<PostRouteProps> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getposts()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getpostStore = () => {
    return this.getInjectedProps().postStore
  }

  getposts = () => {
    this.getpostStore().getPostList()
  }

  renderSuccessUI = observer(() => {
    const { posts } = this.getpostStore()
    return (
      <PostsWrapper>
        <PostList posts={posts} />
      </PostsWrapper>
    )
  })

  render() {
    const { getPostListAPIStatus, getPostListAPIError } = this.getpostStore()
    return (
      <LoadingWrapperWithFailure
        apiStatus={getPostListAPIStatus}
        apiError={getPostListAPIError}
        onRetry={this.getposts}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default PostRoute
