import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.banner}>
          <Image
            className={styles.bannerImage}
            src="/banner.avif"
            alt="馬卡龍烘焙精品"
            width={1200}
            height={600}
            priority
          />
          <div className={styles.bannerOverlay}>
            <h1 className={styles.title}>精緻馬卡龍烘焙</h1>
            <p className={styles.subtitle}>法式精品甜點，每一口都是藝術</p>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>聯絡我們</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>電話</h3>
              <p>02-1234-5678</p>
            </div>
            <div className={styles.contactItem}>
              <h3>地址</h3>
              <p>台北市大安區忠孝東路四段123號</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
