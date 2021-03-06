import React, { useEffect } from "react";
import "./headerinfo.scss";
import bell from "../../assets/images/homepage/bell.png";
import avatar from "../../assets/images/homepage/avatar.png";
import arrow from "../../assets/images/homepage/arrow.png";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import popup from "../../assets/images/homepage/popup.png";
type PropsType = {
  title?: string;
  sub?: string;
  sub1?: string;
};

const arrowElenmet = (sub: string | undefined) => {
  if (sub === "Dashboard") return "";
  else if (sub === "Thông tin cá nhân") return "";
  else
    return (
      <>
        <img srcSet={`${arrow} 2x`} alt="" />
      </>
    );
};
const arrowElenmet1 = (sub1: string | undefined, sub: string | undefined) => {
  if (sub1 && sub)
    return (
      <>
        <img srcSet={`${arrow} 2x`} alt="" />
      </>
    );
  else return "";
};
const Headerinfo = ({ title, sub, sub1 }: PropsType) => {
  const backGroundRightRef = useRef<HTMLHeadingElement | null>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      backGroundRightRef.current?.setAttribute(
        "style",
        "background-color : white "
      );
    } else if (pathname === "profile") {
      ProfileRef.current?.setAttribute("style", "background-color : #F7F7F7");
    } else
      backGroundRightRef.current?.setAttribute(
        "style",
        "background-color : #F7F7F7"
      );
  }, [pathname]);
  const ProfileRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <div className="headerinfo-wrap">
      <div className="headerinfo-left">
        <div className="headerinfo-left__desc">
          <span className="headerinfo-left__title">{title}</span>
          {arrowElenmet(sub)}
          <span className="headerinfo-left__sub" ref={ProfileRef}>
            {sub}
          </span>
          {arrowElenmet1(sub1, sub)}
          <span className="headerinfo-left__sub" ref={ProfileRef}>
            {sub1}
          </span>
        </div>
      </div>
      <div className="headerinfo-right" ref={backGroundRightRef}>
        <div className="headerinfo-right__noti">
          <img srcSet={`${bell} 2x`} alt="" />
          <div className="headerinfo-right__noti__popup">
            <img srcSet={`${popup} 2x`} alt="" />
          </div>
        </div>

        <div className="headerinfo-right__profile">
          <Link to="/profile">
            <div className="headerinfo-right__avatar">
              <img srcSet={`${avatar} 2x`} alt="" />
            </div>
          </Link>
          <div className="headerinfo-right__user">
            <Link to="/profile">
              <div className="headerinfo-right__hi">Xin chào</div>

              <div className="headerinfo-right__name">Ngô Thành Đạt</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerinfo;
