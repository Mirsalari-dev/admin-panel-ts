import React, { useState } from "react";
import { Itable as Props, complex } from "../../../interfaces/Itable";
import Card from "../../UI/card/Card";
import { useTranslation } from "react-i18next";
import classes from "./CustomTable.module.scss";
import Badge from "../../UI/badge/Badge";

const CustomTable: React.FC<Props> = (props) => {

  
  function tableBody(item: complex, index: number) {
    /* type guard (in typescript) */
    if ("username" in item) {
      //for implementing top customers
      return (
        <tr key={index}>
          <td>{item.username}</td>
          <td>{item.order}</td>
          <td>{item.price}</td>
        </tr>
      );
    } else if ("orderId" in item) {
      //for implementing latest transactions
      return (
        <tr key={index}>
          <td>{item.orderId}</td>
          <td>{item.customer}</td>
          <td>{item.totalPrice}</td>
          <td>{item.date}</td>
          <td>
          <Badge content={item.status} />
          </td>
        </tr>
      );
    }
  }

  const { t } = useTranslation();

  return (
    <>
      <div className={classes.container}>
        <Card>
          <div className={classes.wrapper}>
            <div className={classes.table__wrapper}>
              <table
                className={classes.table}
              >
                {props.headData ? (
                  <thead>
                    <tr>
                      {props.headData.map((item, index) => (
                        <th key={index}>{t(item)}</th>
                      ))}
                    </tr>
                  </thead>
                ) : null}
                <tbody>
                  {props.bodyData.map((item, index) => tableBody(item, index))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CustomTable;
