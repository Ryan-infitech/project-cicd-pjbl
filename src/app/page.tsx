import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div aria-hidden className={styles.backdropLeft} />
      <div aria-hidden className={styles.backdropRight} />
      <main className={styles.panel}>
        <section className={styles.photoSection}>
          <Image
            className={styles.photo}
            src="/RIANSEPTIAWAN.JPG"
            alt="Foto profil"
            width={540}
            height={720}
            priority
          />
        </section>

        <section className={styles.content}>
          <p className={styles.eyebrow}>project ci/cd</p>
          <h1 className={styles.title}>Halo, saya Rian Septiawan.</h1>
          <p className={styles.lead}>
            Pengajar yang fokus membangun pembelajaran yang jelas, praktis, dan
            berdampak.
          </p>
          <p className={styles.description}>
            Senang berkenalan dengan anada semua. Melalui halaman sederhana ini, saya
            ingin menyapa sekaligus memperkenalkan diri secara profesional. Saya
            percaya proses belajar terbaik adalah yang terstruktur, hangat, dan
            mudah diterapkan.
         

          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href="mailto:ryanseptiawan@student.unp.ac.id"
            >
              Hubungi Saya
            </a>
            <a className={styles.secondaryAction} href="#profil-singkat">
              Profil Singkat
            </a>
          </div>

          <p id="profil-singkat" className={styles.signature}>
            Terima kasih sudah berkunjung. Semoga halaman ini menjadi awal
            kolaborasi pembelajaran yang baik.
          </p>
        </section>
      </main>
    </div>
  );
}
