import getPostsResponse from '../../fixtures/getPostsResponse.json'

import { resolveWithTimeout } from '../../utils/TestUtils'

import PostService from './index'

class PostFixtureService implements PostService {
  getPostsAPI() {
    return resolveWithTimeout(getPostsResponse)
  }

  updatePostCompletionAPI() {
    return resolveWithTimeout({})
  }
}

export default PostFixtureService
