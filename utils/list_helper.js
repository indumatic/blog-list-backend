const dummy = blogs => 1

const totalLikes = blogs =>
  blogs
    .map(blog => blog.likes)
    .reduce((total, likes) => total + likes, 0)

const favouriteBlog = blogs =>
  blogs.length > 0
    ? blogs
      .reduce((prev, curr) =>
        curr.likes > prev.likes
          ? curr
          : prev
      )
    : {}

const mostBlogs = blogs =>
  blogs.length > 0
    ? blogs
      .map(blog => blog.author)
      .reduce((prev, curr) =>
        prev
          .some(x => curr === x.author)
          ? prev
            .map(x =>
              x.author === curr
                ? { blogs: x.blogs++, ...x }
                : x
            )
          : prev.concat({
            author: curr,
            blogs: 1
          })
      , [])
      .reduce((prev,curr) =>
        curr.blogs > prev.blogs
          ? curr
          : prev
      )
    : {}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs
}