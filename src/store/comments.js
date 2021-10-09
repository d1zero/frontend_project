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

    setLoading(new_val) {
        this.loading = new_val
    }
}

export default new comments()