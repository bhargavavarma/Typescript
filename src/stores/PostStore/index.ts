import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import PostService from '../../services/PostService'

import PostModel from '../models/PostModel'
import { PostObject } from '../types'

class PostStore {
  postService: PostService
  @observable getPostListAPIStatus!: APIStatus
  @observable getPostListAPIError!: Error | null
  @observable posts!: Array<PostModel>

  constructor(postService: PostService) {
    this.postService = postService
    this.init()
  }

  @action.bound
  init() {
    this.getPostListAPIStatus = API_INITIAL
    this.getPostListAPIError = null
    this.posts = []
  }

  @action.bound
  setGetPostListAPIStatus(status) {
    this.getPostListAPIStatus = status
  }

  @action.bound
  setGetPostListAPIError(error) {
    this.getPostListAPIError = error
  }

  @action.bound
  setPostListResponse(response: Array<PostObject> | null) {
    if (response) {
      this.posts = response.map(post => {
        return new PostModel(post)
      })
    }
  }

  @action.bound
  getPostList() {
    const getTodosPromise = this.postService.getPostsAPI()
    return bindPromiseWithOnSuccess(getTodosPromise)
      .to(this.setGetPostListAPIStatus, this.setPostListResponse)
      .catch(this.setGetPostListAPIError)
  }
}

export default PostStore
