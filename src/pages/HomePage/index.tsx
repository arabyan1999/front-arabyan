import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import NavigationBar from './../../components/index';

interface IData {
    image: string;
    title: string;
    category: string;
    content: string;
    date: string;
    views: string;
}

const HomePage = () => {
    const [postData, setPostData] = useState<IData[]>([]);
    const ax = axios.create({
        baseURL: 'http://localhost:3000'
    })

    useEffect(() => {
        const getData = async () => {
            try {
                const { data: { data } } = await ax.get('data.json')
                setPostData(data)
            } catch (e) {
                throw e
            }
        }
        getData()
    }, []);
    return (
        <div>
            <NavigationBar />
            <div className={styles.home}>
                {postData.map(({ image, title, category, content, date, views }) => (
                    <div key={title} className={styles.item}>
                        <img src={require(`../../assets/images/${image}`)} alt={image} />
                        <p className={styles.category}>{category}</p>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.dateContainer}>
                            <span className={styles.niek}>Niek Bove</span>
                            <span className={styles.dateAndViews}>&#x2022;&nbsp;&nbsp;{date}</span>
                            <span className={styles.dateAndViews}>&#x2022;&nbsp;&nbsp;{views}</span>
                        </p>
                        <p className={styles.content}>{content}</p>
                    </div>
                ))}
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="/additional-exercise">
                    To Additional Exercise
                </a>
            </div>
        </div>
    )
}

export default HomePage;