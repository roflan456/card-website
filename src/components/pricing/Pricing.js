import React from "react";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import "./Pricing.css";
import { IconContext } from "react-icons/lib";

export default function Pricing() {
  return (
    <IconContext.Provider value={{ size: 32 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Цена</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo" style={{backgroundColor:'blue'}}>
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Стандартный</h3>
                  <h4>8.99$</h4>
                  <p>в месяц</p>
                  <ul
                    className="pricing__container-features"
                    style={{ listStyle: "none" }}
                  >
                    <li>100 транзакции</li>
                    <li>2% кэшбэк</li>
                    <li>10.000$ лимит</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Выбрать
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo" style={{backgroundColor:'#ffdb19'}}>
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Золотой</h3>
                  <h4>17.99$</h4>
                  <p>в месяц</p>
                  <ul
                    className="pricing__container-features"
                    style={{ listStyle: "none" }}
                  >
                    <li>10000 транзакции</li>
                    <li>3.5% кэшбэк</li>
                    <li>100.000$ лимит</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Выбрать
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo"  style={{backgroundColor:'#87d3f8'}}>
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Бриллиантовый</h3>
                  <h4>29.99$</h4>
                  <p>в месяц</p>
                  <ul
                    className="pricing__container-features"
                    style={{ listStyle: "none" }}
                  >
                    <li>Безлимитные транзакции</li>
                    <li>5% кэшбэк</li>
                    <li>Безлимит</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Выбрать
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
