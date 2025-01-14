import React from "react";
import styles from "../styles/MypageMenu.module.css";
import { useNavigate } from "react-router-dom";

const MypageMenu = () => {
  const navigate = useNavigate();
  const userId = 1234;
  return (
    <div style={{ overflow: "hidden" }}>
      <div id={styles.title}>더보기</div>
      <div className={styles.menuitem}>내 프로필 관리</div>
      <hr style={{ margin: "0px 40px" }} />
      <div className={styles.menuitem}>반려동물 프로필 관리</div>
      <div className={styles.boundary} />
      <div className={styles.menuitem}>카드관리</div>
      <div className={styles.boundary} />
      <div
        className={styles.menuitem}
        onClick={() => {
          navigate(`/petsitterprfile/${userId}`);
        }}
      >
        펫시터 프로필 관리
      </div>
      <div id={styles.footer}>신한DS금융SW아카데미_맡겨조</div>
    </div>
  );
};

export default MypageMenu;
