import {makeAutoObservable} from 'mobx'

class news {
    news_array = []
    loading = true

    constructor() {
        makeAutoObservable(this)
    }

    setNews(new_arr) {
        this.news_array = new_arr
    }

    setLoading(new_val) {
        this.loading = new_val
    }
}

export default new news()