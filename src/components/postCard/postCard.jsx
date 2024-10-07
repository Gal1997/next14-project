import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13659374/pexels-photo-13659374.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link href={"/blog/" + post.id} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default postCard;
