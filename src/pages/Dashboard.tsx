import React from "react";
import { useTranslation } from "react-i18next";


function Dashboard() {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="title">{t("dashboard")}</h2>

    </section>
  );
}

export default Dashboard;
