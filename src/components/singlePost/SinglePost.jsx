import { Link} from 'react-router-dom'
import './SinglePost.css'
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" srcset="" />
            <h1 className='singlePostTitle'>
               Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Shrees</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores excepturi autem temporibus, dolorem optio odit, repellat accusantium rerum dignissimos aliquam, doloribus illo quae provident ea suscipit ipsam ducimus nulla fugit!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores excepturi autem temporibus, dolorem optio odit, repellat accusantium rerum dignissimos aliquam, doloribus illo quae provident ea suscipit ipsam ducimus nulla fugit!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores excepturi autem temporibus, dolorem optio odit, repellat accusantium rerum dignissimos aliquam, doloribus illo quae provident ea suscipit ipsam ducimus nulla fugit!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores excepturi autem temporibus, dolorem optio odit, repellat accusantium rerum dignissimos aliquam, doloribus illo quae provident ea suscipit ipsam ducimus nulla fugit!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores excepturi autem temporibus, dolorem optio odit, repellat accusantium rerum dignissimos aliquam, doloribus illo quae provident ea suscipit ipsam ducimus nulla fugit!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores excepturi autem temporibus, dolorem optio odit, repellat accusantium rerum dignissimos aliquam, doloribus illo quae provident ea suscipit ipsam ducimus nulla fugit!
                </p>
        </div>
    </div>
  )
}
