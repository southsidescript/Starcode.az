"use client"

import { useState } from "react"
import {PhoneCall, CircleUser, AtSign, MessageCircle } from "lucide-react"
import styles from "./neo-futuristic-form.module.css"
import ClassicButton from "../../atoms/classicButton/classicButton"
export default function NeoFuturisticForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    category: "design",
    message: "",
  })

  async function sendMessageToTelegram(msg) {
    console.log('Сообщение отправлено')
      const res = await fetch("/API/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId: "688804750", // ID пользователя, которому отправляем сообщение
          message: msg,
        }),
      });
    
      const data = await res.json();
      console.log(data);
    }

  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    sendMessageToTelegram(`AD: ${formState.name}\nEMAIL: ${formState.email}\nKateqoriya: ${formState.category}\nMesaj: ${formState.message}`);
 



    console.log("Form submitted:", formState)
    // Add your form submission logic here
  }

  const categories = [
    { id: "design", label: "Beginner" },
    { id: "Intermediate", label: "Intermediate" },
    { id: "Personal", label: "Personal modul" },
  ]

  return (

      <div className={styles.formContainer}>
        <div className={styles.formDecoration}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.header}>
          <div className={styles.headerAccent}></div>
          <h2 className={styles.title}>
          Qeydiyyat<span className={styles.titleAccent}>_</span>
          </h2>
          <p className={styles.subtitle}>Tezliklə bizə qoşul!</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={`${styles.inputContainer} ${focused === "name" ? styles.focused : ""}`}>
              <CircleUser className={styles.inputIcon} />
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="AD"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                required
              />
              <div className={styles.inputLine}></div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={`${styles.inputContainer} ${focused === "email" ? styles.focused : ""}`}>
              <PhoneCall className={styles.inputIcon} />
              <input
                id="email"
                name="email"
                type="text"
                value={formState.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Əlaqə nömrəsi"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
              />
              <div className={styles.inputLine}></div>
            </div>
          </div>

          <div className={styles.categorySelector}>
            <div className={styles.categoryLabel}>KATEQORIYA</div>
            <div className={styles.categoryOptions}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`${styles.categoryButton} ${formState.category === category.id ? styles.categoryActive : ""}`}
                  onClick={() => setFormState((prev) => ({ ...prev, category: category.id }))}
                >
                  {category.label}
                  {formState.category === category.id && <div className={styles.categoryActiveIndicator}></div>}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={`${styles.textareaContainer} ${focused === "message" ? styles.focused : ""}`}>
              <div className={styles.textareaHeader}>
                <MessageCircle className={styles.inputIcon} />
                <span className={styles.textareaLabel}>MESSAGE</span>
              </div>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Burada mesajınızı yazın..."
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
              />
              <div className={styles.cornerAccent}></div>
            </div>
          </div>

          
          <ClassicButton>
                Göndər⚡
                </ClassicButton>
        </form>

        <div className={styles.formFooter}>
          <div className={styles.formId}>FORM//001</div>
          <div className={styles.formGrid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.gridDot}></div>
            ))}
          </div>
        </div>
      </div>

  )
}

