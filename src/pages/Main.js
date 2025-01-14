import React from "react";
import style from "../styles/Main.module.css";
import "../styles/dotCustom.css";
import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import PetSitterView from "../components/PetSitterMainView/PetSitterView";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { idtextAtom } from "../atom/atoms";

const Main = () => {
  const [userId] = useRecoilState(idtextAtom);
  console.log(userId);
  const navigate = useNavigate();
  return (
    <div className={style.mainbody}>
      {/* 알림 Header */}
      <div className={style.mainHeader}>
        <Link to="/alarm">
          <FaBell
            size="24"
            color="white"
            style={{
              marginRight: "15px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
      {/* 이미지 배너 슬라이더 */}
      <MainHeader />
      {/* main content 영역  */}
      <PetSitterView />
      {/* 상단 이동 버튼 */}
      <div
        className={style.flexBT}
        onClick={() => {
          navigate("/petsitter");
        }}
      >
        <FaPlus size="40" id={style.plusIcon} color="white" />
      </div>
    </div>
  );
};

export default Main;
