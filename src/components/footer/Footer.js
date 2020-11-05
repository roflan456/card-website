import React from "react";
import "./Footer.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        Присоединяйтесь к нашему эксклюзивному членству, чтобы получать последние новости и тенденции
        </p>
        <p className="footer-subscription-text">
        Вы можете отписаться в любое время.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Ваш Email"
            />
            <Button buttonStyle="btn--outline">Подписаться</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>О нас</h2>
            <Link to="/sign-up">Как это работает</Link>
            <Link to="/">Отзывы</Link>
            <Link to="/">Карьера</Link>
            <Link to="/">Инвесторы</Link>
            <Link to="/">Условия использования</Link>
          </div>
          <div className="footer-link-items">
            <h2>Связаться с нами</h2>
            <Link to="/">Связаться</Link>
            <Link to="/">Поддержка</Link>
            <Link to="/">Направления</Link>
            <Link to="/">Спонсорство</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Ролики</h2>
            <Link to="/">Отправить видео</Link>
            <Link to="/">Амбассадоры</Link>
            <Link to="/">Агентство</Link>
            <Link to="/">Оказывающие влияние</Link>
          </div>
          <div className="footer-link-items">
            <h2>Социальные медиа</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              SAVAGE
            </Link>
          </div>
          <small className="website-rights">SAVAGE © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
