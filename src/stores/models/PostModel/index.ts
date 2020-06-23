import { PostObject } from '../../types'

class PostModel {
  userId: number
  id: number
  title: string
  body: string

  constructor(post: PostObject) {
    this.userId = post.id
    this.id = post.id
    this.title = post.title
    this.body = post.body
  }
}

export default PostModel
