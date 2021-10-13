import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg"
            src="https://i.pinimg.com/564x/50/ca/28/50ca281785352f3b78b0ff95704c3dd2.jpg" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eos ad deserunt praesentium inventore laboriosam iusto repudiandae animi, quod eum minima doloribus reprehenderit voluptatum ullam debitis quis dolores illum possimus!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eos ad deserunt praesentium inventore laboriosam iusto repudiandae animi, quod eum minima doloribus reprehenderit voluptatum ullam debitis quis dolores illum possimus!
            </p>
        </div>
    )
}
