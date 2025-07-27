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

        <section className={styles.products}>
          <h2>精選馬卡龍</h2>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&crop=center"
                  alt="經典香草馬卡龍"
                  width={300}
                  height={300}
                />
              </div>
              <h3>經典香草馬卡龍</h3>
              <p>法式經典香草風味，細膩甜美</p>
            </div>
            
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=300&h=300&fit=crop&crop=center"
                  alt="草莓玫瑰馬卡龍"
                  width={300}
                  height={300}
                />
              </div>
              <h3>草莓玫瑰馬卡龍</h3>
              <p>浪漫粉色，草莓與玫瑰的完美結合</p>
            </div>
            
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop&crop=center"
                  alt="抹茶白巧克力馬卡龍"
                  width={300}
                  height={300}
                />
              </div>
              <h3>抹茶白巧克力馬卡龍</h3>
              <p>日式抹茶搭配濃郁白巧克力</p>
            </div>
            
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src="https://images.unsplash.com/photo-1612203985729-70726954388c?w=300&h=300&fit=crop&crop=center"
                  alt="檸檬蜂蜜馬卡龍"
                  width={300}
                  height={300}
                />
              </div>
              <h3>檸檬蜂蜜馬卡龍</h3>
              <p>清新檸檬香氣與天然蜂蜜甜味</p>
            </div>
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
