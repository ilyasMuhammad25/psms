import Image from "next/image";
import Link from "next/link";

export default function RecentBlogCard2({ data }) {
    return (
        <>
            <div className="optech-blog-thumb2">
                <Image
                    height="0"
                    width="0"
                    sizes="100vw"
                    src={data.imgUrl}
                    alt="thumb"
                />
                <div className="optech-blog-content2">
                    <div className="optech-blog-meta">
                        <ul>
                            <li>
                                <a href="single-blog.html">{data.category}</a>
                            </li>
                            <li>
                                <a href="single-blog.html">{data.date}</a>
                            </li>
                        </ul>
                    </div>
                    <Link href="/blog-details">
                        <h4>{data.title}</h4>
                    </Link>
                    <Link className="optech-icon-btn" href="/blog-details">
                        <i className="icon-show ri-arrow-right-line" />
                        <span>Learn More</span>
                        <i className="icon-hide ri-arrow-right-line" />
                    </Link>
                </div>
            </div>
        </>
    );
}
