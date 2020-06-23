// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'

import PostService from '../services/PostService/index.api'

import TodoStore from './TodoStore'

import PostStore from './PostStore'

const todoStore = new TodoStore(new TodoService())

const postStore = new PostStore(new PostService())

const stores = {
  todoStore,
  postStore
}

export default stores
