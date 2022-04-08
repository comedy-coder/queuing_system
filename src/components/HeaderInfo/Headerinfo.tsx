import React, { useEffect } from "react";
import "./headerinfo.scss";
import bell from "../../assets/images/homepage/bell.png";
import avatar from "../../assets/images/homepage/avatar.png";
import arrow from "../../assets/images/homepage/arrow.png";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
type PropsType = {
  title?: string;
  sub?: string;
};

const Headerinfo = ({ title, sub }: PropsType) => {
  const backGroundRightRef = useRef<HTMLHeadingElement | null>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/")
      backGroundRightRef.current?.setAttribute(
        "style",
        "background-color : white"
      );
    else
      backGroundRightRef.current?.setAttribute(
        "style",
        "background-color : #F7F7F7"
      );
  });

  return (
    <div className="headerinfo-wrap">
      <div className="headerinfo-left">
        <div className="headerinfo-left__desc">
          <span className="headerinfo-left__title">{title}</span>
          {sub === "Dashboard" ? "" : <img srcSet={`${arrow} 2x`} alt="" />}
          <span className="headerinfo-left__sub">{sub}</span>
        </div>
      </div>
      <div className="headerinfo-right" ref={backGroundRightRef}>
        <div className="headerinfo-right__noti">
          <img srcSet={`${bell} 2x`} alt="" />
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
