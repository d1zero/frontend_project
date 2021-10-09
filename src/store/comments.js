import {makeAutoObservable} from 'mobx'

class comments {
    comments_array = []
    loading = true

    constructor() {
        makeAutoObservable(this)
    }

    setComments(new_arr) {
        this.comments_array = new_arr
    }

    addComment(new_comment) {
        this.comments_array.push(new_comment)
    }

    setLoading(new_val) {
        this.loading = new_val
    }
}

export default new comments()