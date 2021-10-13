import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=940" alt="" className="singlePostImg" />

                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.

                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ngozi</b></span>
                    <span className="singlePostDAte">1 hour ago</span>
                </div>
                <div className="singlePostDesc">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus sunt cupiditate natus, consequuntur voluptatem ab maxime modi nisi. Natus doloremque excepturi officiis amet illum sapiente explicabo fugit, atque beatae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima veniam maiores repudiandae inventore non eveniet ullam, molestias temporibus libero dolor eligendi voluptatem tempora rem labore laborum officiis nobis deserunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia sint incidunt dignissimos hic distinctio excepturi omnis inventore debitis. Laborum ab inventore adipisci, mollitia magnam facere culpa cupiditate et cumque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rerum libero expedita hic enim error id, ut recusandae atque perferendis labore ab necessitatibus distinctio veritatis aperiam voluptatum ea. Tempora, reiciendis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima enim voluptatum in quaerat, perferendis doloremque blanditiis magni veritatis fugit odit eveniet rem unde quod libero provident impedit obcaecati! Error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero, repellat explicabo cum esse, neque veniam rerum, pariatur fuga minus animi iure maiores quis porro excepturi hic laboriosam libero ea.
                    </p>
                </div>
            </div>
        </div>
    )
}
