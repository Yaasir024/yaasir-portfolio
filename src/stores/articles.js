import { defineStore } from 'pinia'

export const articleStore = defineStore({
  id: 'api',
  state: () => ({
    posts: [],
    dateOptions: { year: 'numeric', month: 'short', day: 'numeric' }
  }),
  getters: {},
  actions: {
    getPosts() {
      async function gql(query, variables = {}) {
        const data = await fetch('https://api.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query,
            variables
          })
        })
        return data.json()
      }

      const GET_USER_ARTICLES = `
            query GetUserArticles($page: Int!) {
                user(username: "yaasir024") {
                    publication {
                        posts(page: $page) {
                            title
                            brief
                            slug
                            dateAdded
                        }
                    }
                }
            }
        `

      gql(GET_USER_ARTICLES, {
        page: 0
      }).then((res) => {
        this.posts = res.data.user.publication.posts
        this.filterpost()
      })
    },
    filterpost() {
      this.posts.forEach((i) => {
        if (i.brief.length > 75) {
          i.brief = i.brief.substring(0, 80) + '...'
          // return subStr ;
        }
        i.dateAdded = new Date(i.dateAdded).toLocaleDateString('en-us', this.dateOptions)
      })
      this.posts = this.posts.slice(0, 4)
    }
  }
})
