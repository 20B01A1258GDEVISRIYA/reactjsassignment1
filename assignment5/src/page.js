function Page() {
    return (
        <div>
            <div style={{ backgroundColor: 'black' }} className="a">
                <a href="#" className="one">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
                    <span>React</span>
                </a>
                <nav className="two">
                    <a href="#" className="one">Docs</a>
                    <a href="#" className="one">Tutorial</a>
                    <a href="#" className="one">Blog</a>
                    <a href="#" className="one">Community</a>
                </nav>
                <form action="" className="three">
                    <span>
                        <input type="search" placeholder="search" />
                        <a href="#" className="one">Languages</a>
                        <a href="#" className="one">github</a>
                    </span>
                </form>
                <div>
                    <h1 className="four">React</h1>
                    <p className="five">A Java Script Library for building user interfaces</p>
                </div>
                <span className="eight">
                    <a href="#" className="six">Get started</a>
                </span>
                <span className="nine">
                    <a href="#" className="seven">Take the Tutorial</a>
                </span>
            </div>
            <div className="eleven">
                <div className="twelve">
                    <p align="center">Declarative</p>
                    <p>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                    </p>
                    <p>
                        Declarative views make your code more predictable and easier to debug
                    </p>
                </div>
                <div className="twelve">
                    <p align="center">Component-based</p>
                    <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                    <p>
                        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                    </p>
                </div>
                <div className="twelve">
                    <p align="center">Learn Once, Write Anywhere</p>
                    <p>
                        We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                    </p>
                    <p>
                        React can also render on the server using Node and power mobile apps using React Native.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Page;