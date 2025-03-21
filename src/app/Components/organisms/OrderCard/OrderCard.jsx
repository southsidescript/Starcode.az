"use client"

import { useState } from "react"
import { Code, Layers, Zap, ChevronRight,ClockFading } from "lucide-react"
import styles from "./futuristic-card.module.css"

export default function FuturisticCard() {
  const [activeTab, setActiveTab] = useState(0)

  const topics = [
    {
      title: "Texnologiyalar",
      icon: <Layers className={styles.icon} />,
      content: "HTML5,CSS3,JavaScript,Sass,Mui Material,React,Next.js",
    },
    {
      title: "Sertifikat",
      icon: <Zap className={styles.icon} />,
      content: "Kursu müvəffəqiyyətlə başa vuran hər bir iştirakçı, öz bacarıqlarını təsdiq edən rəsmi sertifikat alacaq. Bu sertifikat, əldə etdiyiniz bilik və bacarıqların göstəricisi olacaq və gələcəkdəki peşəkar inkişafınızda sizə böyük dəstək verəcək.",
    },
    {
      title: "Müddəti",
      icon: <ClockFading className={styles.icon} />,
      content: "Kurs 12 ay ərzində intensiv şəkildə davam edəcək və hər bir tələbəyə geniş biliklər qazandıracaq. Bu müddət ərzində, hər bir mövzu dərindən öyrəniləcək və praktiki tapşırıqlar vasitəsilə tətbiq ediləcək. Kursun sonunda tələbələrə mükəmməl bir təcrübə və sertifikat veriləcək.",
    },
  ]

  return (

      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Front-End</span> Developer
          </h2>
          <p className={styles.subtitle}>Kursun müddəti: 12 ay</p>
        </div>

        <div className={styles.tabs}>
          {topics.map((topic, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
            >
              {topic.icon}
              <span className={styles.tabLabel}>{topic.title.split(" ")[0]}</span>
              {activeTab === index && <div className={styles.activeIndicator} />}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.topicHeader}>
            <div className={styles.iconWrapper}>{topics[activeTab].icon}</div>
            <div>
              <h3 className={styles.topicTitle}>{topics[activeTab].title}</h3>
              <p className={styles.topicContent}>{topics[activeTab].content}</p>
            </div>
          </div>

          
        </div>

        <div className={styles.footer}>
          <div className={styles.dots}>
            {[0, 1, 2].map((dot) => (
              <div key={dot} className={`${styles.dot} ${activeTab === dot ? styles.activeDot : ""}`} />
            ))}
          </div>
          <div className={styles.pageIndicator}>01.{activeTab + 1}</div>
        </div>
      </div>
  
  )
}

